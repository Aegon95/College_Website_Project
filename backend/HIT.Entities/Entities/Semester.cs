using System;

namespace HIT.Entities.Entities
{
    public class Semester
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreatedUtc { get; set; }
        public string CreatedBy { get; set; }
    }
}