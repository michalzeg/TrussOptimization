using Newtonsoft.Json;
using StruCal.TrussOptimization.Domain.Sections.SectionTypes;
using System.Reflection;
using Type = StruCal.TrussOptimization.Domain.Sections.SectionTypes;
namespace StruCal.TrussOptimization.Domain.Sections
{
    public class SectionCollection
    {
        private static readonly object _lockObj = new object();
        private static SectionCollection _instance;

        public static SectionCollection Instance
        {
            get
            {
                if (_instance == null)
                {
                    lock (_lockObj)
                    {
                        if (_instance == null)
                        {
                            _instance = FromFile();
                        }
                    }
                }
                return _instance;
            }
        }

        private static SectionCollection FromFile()
        {
            var assembly = Assembly.GetExecutingAssembly();
            string resourceName = assembly.GetManifestResourceNames()
                                          .Single(str => str.EndsWith("sections.json"));

            using (Stream stream = assembly.GetManifestResourceStream(resourceName))
            using (StreamReader reader = new StreamReader(stream))
            {
                string content = reader.ReadToEnd();
                var result = JsonConvert.DeserializeObject<SectionCollection>(content);
                return result;
            }
        }

        public Type.SectionTypes Types { get; set; }

        public IEnumerable<IBaseSection> GetAllSections()
        {
            var result = new List<IBaseSection>();
            result.AddRange(Types.CHS);
            result.AddRange(Types.HEA);
            result.AddRange(Types.HEB);
            result.AddRange(Types.HEM);
            result.AddRange(Types.IPE);
            //result.AddRange(.Types.IPN);
            //result.AddRange(.Types.LE);
            //result.AddRange(.Types.LU);
            result.AddRange(Types.RHS);
            result.AddRange(Types.SHS);
            //result.AddRange(.Types.UE);
            //result.AddRange(.Types.UPE);
            //result.AddRange(.Types.UPN);
            return result;
        }

        public int IndexOf(string name) => GetAllSections().Select((value, index) => new { index, value })
                                              .Where(e => e.value.Name == name)
                                              .Select(e => e.index)
                                              .First();

        public IEnumerable<IBaseSection> GetChunk(int startIndex, int endIndex) => GetAllSections().Select((value, index) => new { index, value })
                                              .Where(e => e.index >= startIndex && e.index <= endIndex)
                                              .Select(e => e.value)
                                              .OrderBy(e => e.A)
                                              .ToList();

        public IEnumerable<IBaseSection> GetChunk(string startSection, string EndSection) => GetChunk(IndexOf(startSection), IndexOf(EndSection));
    }
}