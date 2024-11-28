const resolvers = {
  Query: {
    getAllCreditUnions: () => {
      return [
        {
          id: "1",
          Contract_Number: "C123",
          Credit_Union_Name: "Union One"
        }
      ];
    },
    getPremiumReports: () => {
      return [
        {
          id: "1",
          Product_Name: "Product A",
          Report_Period: "Q1",
          Status: "Pending",
          Last_Update: "2023-01-01",
          Period_Ending: "2023-03-31",
          Adjustment_Type_to_the_Credit_Union: "Adjustment A",
          Comment: "Comment A",
          Total_Borrower_Fees_: 100.0,
          CU_Retail_Rate: 1.5,
          Protected_Loan_Amount: 10000.0,
          Pay_Rate: 0.02,
          Premium_Due: 200.0,
          Total_Amount: 10500.0
        }
      ];
    },
    getPremiumAdjustments: () => {
      return [
        {
          id: "1",
          Product_Name: "Product B",
          Report_Period: "Q1",
          Status: "Approved",
          Last_Update: "2023-02-01",
          Period_Ending: "2023-03-31",
          Adjustment_Type_to_the_Credit_Union: "Adjustment B",
          Comment: "Comment B",
          Total_Borrower_Fees_: 150.0,
          CU_Retail_Rate: 1.75,
          Protected_Loan_Amount: 15000.0,
          Pay_Rate: 0.03,
          Premium_Due: 300.0,
          Total_Amount: 15300.0
        }
      ];
    },
    getSinglePremiumCertificateReturns: () => {
      return [
        {
          id: "1",
          Premium_Report: "Report 1"
        }
      ];
    }
  },
  Mutation: {
    addCreditUnion: (_, { input }) => {
      const newCreditUnion = {
        id: "2",
        ...input
      };
      // Presume that it is saved in the database and return it.
      return newCreditUnion;
    },
    addPremiumReport: (_, { input }) => {
      const newPremiumReport = {
        id: "2",
        ...input
      };
      // Presume that it is saved in the database and return it.
      return newPremiumReport;
    },
    addPremiumAdjustment: (_, { input }) => {
      const newPremiumAdjustment = {
        id: "2",
        ...input
      };
      // Presume that it is saved in the database and return it.
      return newPremiumAdjustment;
    },
    addSinglePremiumCertificateReturn: (_, { input }) => {
      const newSinglePremiumCertificateReturn = {
        id: "2",
        ...input
      };
      // Presume that it is saved in the database and return it.
      return newSinglePremiumCertificateReturn;
    }
  }
};

export default resolvers;