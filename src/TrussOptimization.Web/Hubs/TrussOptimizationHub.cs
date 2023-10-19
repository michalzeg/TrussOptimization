using Microsoft.AspNetCore.SignalR;

namespace StruCal.TrussOptimization.Hubs
{
    public class TrussOptimizationHub : Hub
    {
        public string GetId()
        {
            return Context.ConnectionId;
        }
    }
}