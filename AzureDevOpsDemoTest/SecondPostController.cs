using AzureDevOpsDemo;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace AzureDevOpsDemoTest
{
    public class SecondPostController
    {
        [Fact]
        public void MultiplyTest()
        {
            var result = MyMathsClass.Multiply(2, 3);
            Assert.True(result > 0);
        }
    }
}
