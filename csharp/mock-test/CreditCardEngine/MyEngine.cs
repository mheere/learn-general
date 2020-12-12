using System;
using System.Collections.Generic;
using System.Text;

namespace CreditCardEngine
{
    public class MyEngine
    {
        public MyEngine(int age)
        {
            Age = age;
        }

        public int Age { get; set; } = 0;

        public int Evaluate(string name)
        {
            if (name.Length == 0) return 0;

            if (name == "marcel") return 10;

            return Age;

        }

    }
}
