using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace mysql_web_app
{
    public class MySqlConnect
    {
        public static DataRequest Connect()
        {
            MySql.Data.MySqlClient.MySqlConnection conn;
            string myConnectionString;

            myConnectionString = "server=127.0.0.1;uid=root;pwd = pulse4AAA; database = sakila";

            //string query = "select * from v_customer_address";
            string query = "SELECT COUNT(*) FROM address";
            DataSet dataset = new DataSet();

            conn = new MySqlConnection(myConnectionString);
            MySqlDataAdapter adapter = new MySqlDataAdapter();
            adapter.SelectCommand = new MySqlCommand(query, conn);
            adapter.Fill(dataset);

            // 
            var request = new DataRequest();
            request.UserID = "server";
            request.data.Add(dataset.Tables[0]);
            //request.DataSet = dataset;
            return request;



            //try
            //{
            //    conn = new MySql.Data.MySqlClient.MySqlConnection();
            //    conn.ConnectionString = myConnectionString;
            //    conn.Open();

            //    string sql = "SELECT COUNT(*) FROM address";
            //    MySqlCommand cmd = new MySqlCommand(sql, conn);
            //    object result = cmd.ExecuteScalar();
            //    if (result != null)
            //    {
            //        int r = Convert.ToInt32(result);
            //        Console.WriteLine("Number of address in the world database is: " + r);
            //    }

            //    //string sql = "SELECT Name, HeadOfState FROM Country WHERE Continent='Oceania'";
            //    sql = "select * from v_customer_address";
            //    cmd = new MySqlCommand(sql, conn);
            //    MySqlDataReader rdr = cmd.ExecuteReader();

            //    while (rdr.Read())
            //    {
            //        //Console.WriteLine(rdr[0] + " -- " + rdr[1]);
            //        System.Diagnostics.Debug.WriteLine(rdr[0]);
            //    }
            //    rdr.Close();

            //}
            //catch (MySql.Data.MySqlClient.MySqlException ex)
            //{
            //    //MessageBox.Show(ex.Message);
            //}
        }
    }
}
