using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace mysql_web_app
{
    public class DataRequest
    {
        public string UserID { get; set; }                  //
        public string Context { get; set; }                 //
        public string ContextSub { get; set; }
        //public DataSet DataSet { get; set; } = null;
        public List<Object> data { get; set; } = new List<object>();

    }
}
