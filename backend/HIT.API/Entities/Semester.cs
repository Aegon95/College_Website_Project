using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace HIT.Entities
{
    public class Semester
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Name")] public string Name { get; set; }

        public string Description { get; set; }
        public DateTime CreatedOnUTC { get; set; }
        public string createdBy { get; set; }
    }
}