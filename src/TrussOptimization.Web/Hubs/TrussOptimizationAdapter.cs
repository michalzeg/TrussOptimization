using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using StruCal.TrussOptimization.Domain.Calculations;
using StruCal.TrussOptimization.Domain.Progress;
using System;
using System.Threading.Tasks;
using StruCal.AppCore.TrussOptimization.DTO;

namespace StruCal.TrussOptimization.Hubs
{
    public class TrussOptimizationProgressAdapter : IProgress, ITrussOptimizationProgress
    {
        private string connectionId = string.Empty;
        private readonly IHubContext<TrussOptimizationHub> hub;

        public TrussOptimizationProgressAdapter(IHubContext<TrussOptimizationHub> hubcontext)
        {
            hub = hubcontext;
        }

        public async Task Report(CalculationResult result)
        {
            if (string.IsNullOrEmpty(connectionId))
                throw new NullReferenceException("ConnectionId is empty");

            await hub.Clients.Client(connectionId).SendAsync("progress", JsonConvert.SerializeObject(result.ToDTO(), new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }));
        }

        public void SetConnectionId(string connectionId)
        {
            this.connectionId = connectionId;
        }
    }
}