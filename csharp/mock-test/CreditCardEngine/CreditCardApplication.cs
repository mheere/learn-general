using System;

namespace CreditCardEngine
{
    public enum CreditCardApplicationDecision
    {
        Unknown,
        AutoAccepted,
        AutoDeclined,
        ReferredToHuman
    }

    public class CreditCardApplication
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public decimal GrossAnnualIncome { get; set; }
        public string FrequentFlyerNumber { get; set; }
    }
}
