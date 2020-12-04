using System;
using Xunit;
using Moq;

namespace CreditCardEngine.Tests
{

    public class MyEngineShould
    {
        [Fact]
        public void Test1()
        {
            Assert.Contains("he", "hello");
        }

        [Fact]
        public void OddBehaviourWhenMarcel()
        {
            var sut= new MyEngine(50);
            int res = sut.Evaluate("marcel");
            Assert.Equal(10, res);
        }

        [Fact]
        public void Check1()
        {
            var sut = new MyEngine(25);
            int res = sut.Evaluate("deniz");
            Assert.Equal(25, res);
        }

        [Fact]
        public void Check()
        {
            // NOTE - here there is nothing to Mock!! :)  
            var sut = new MyEngine(25);
            int res = sut.Evaluate("deniz");
            Assert.Equal(25, res);
        }
    }
}
