using AzureDevOpsDemo;
using System;
using Xunit;

namespace AzureDevOpsDemoTest
{
    public class PostTestController
    {
        [Fact]
        public void AddTest()
        {
            var result = MyMathsClass.Add(12, 23);
            Assert.True(result > 0);
        }

        [Fact]
        public void MultiplyTest()
        {
            var result = MyMathsClass.Multiply(2, 3);
            Assert.True(result > 0);
        }

        [Fact]
        public void DivideTest()
        {
            var result = MyMathsClass.Divide(12, 3);
            Assert.True(result > 0);
        }

        [Fact]
        public void FailTest()
        {
            var result = MyMathsClass.Divide(1, 3);
            Assert.True(result > 100);
        }
    }
}
