import { gql } from 'apollo-server';

const typeDefs = `
  type Credit_Union {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
    Premium_Reports: [Premium_Report]
    Premium_Adjustments: [Premium_Adjustment]
    Single_Premium_Certificate_Returns: [Single_Premium_Certificate_Return]
  }

  type Premium_Report {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Premium_Adjustment {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Single_Premium_Certificate_Return {
    id: ID!
    Premium_Report: String
  }
  
  input CreditUnionInput {
    id: ID
    Contract_Number: String!
    Credit_Union_Name: String!
  }

  input PremiumReportInput {
    id: ID
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  input PremiumAdjustmentInput {
    id: ID
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  input SinglePremiumCertificateReturnInput {
    id: ID
    Premium_Report: String
  }

  type Query {
    getAllCreditUnions: [Credit_Union]
    getPremiumReports: [Premium_Report]
    getPremiumAdjustments: [Premium_Adjustment]
    getSinglePremiumCertificateReturns: [Single_Premium_Certificate_Return]
  }

  type Mutation {
    addCreditUnion(input: CreditUnionInput): Credit_Union
    addPremiumReport(input: PremiumReportInput): Premium_Report
    addPremiumAdjustment(input: PremiumAdjustmentInput): Premium_Adjustment
    addSinglePremiumCertificateReturn(input: SinglePremiumCertificateReturnInput): Single_Premium_Certificate_Return
  }
`;

export default typeDefs;