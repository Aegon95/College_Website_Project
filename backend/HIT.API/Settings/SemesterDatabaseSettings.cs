namespace HIT.Settings
{
    public class SemesterDatabaseSettings : ISemesterDatabaseSettings
    {
        public string CollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}