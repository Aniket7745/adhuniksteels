"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
/* ------------------------------------------------------------------
   SECTION DESCRIPTIONS (shown when no child is selected)
------------------------------------------------------------------ */
const SECTION_DESCRIPTIONS = {
  "disclosure-46": `Regulation 46 of SEBI (LODR) mandates listed companies to publish 
relevant disclosures on their website, ensuring transparency and accessibility 
for all stakeholders.`,

  "corporate-governance": `Corporate Governance refers to the system of rules, practices and 
processes by which a company is directed and controlled. It ensures 
transparency, accountability and fairness in all operations.`,

  "investor-services": `Investor Services provides shareholders access to statutory filings, 
notices, results, compliance documents and essential investor-related data. 
Please select a sub-category to explore available documents.`,

  financials: `Financial Reports include annual reports, audited financial results, 
quarterly performance statements and disclosures required under SEBI norms.`,

  other: `This section contains additional documents, communications and general 
information that support the company’s compliance framework.`,

  "other-disclosures": `Additional disclosures published as per SEBI and statutory 
requirements for public transparency and regulatory compliance.`,
};
/* -------------------------
   SIDEBAR STRUCTURE
------------------------- */
const NAV = [
  {
    id: "disclosure-46",
    title: "Disclosure under Regulation 46 of the SEBI (LODR)",
  },

  {
    id: "corporate-governance",
    title: "Corporate Governance",
    children: [
      "Criteria of Making Payments to Ned",
      "Appointment Letter to Independent Directors",
      "Familiarisation Programme for Independent Directors",
      "Policies of The Company",
      "Code of Conduct",
    ],
  },

  {
    id: "investor-services",
    title: "Investor Services",
    children: [
      "MOA & AOA",
      "CSR Annual Action Plan",
      "Board of Directors",
      "Composition of Various Committees Board of Directors",
      "Details of Business",
      "Shareholding Pattern",
      "Annual Return",
      "Compliance Report on Corporate Governance",
      "Notice of Board Meeting",
      "Newspaper Publication",
      "Disclosure Under Regulation 30 Of SEBI LODR",
      "Notice of AGM",
      "Investor Grievance",
      "General Meeting Notice & Proxy",
      "Notice of Postal Ballot",
      "Results Of Postal Ballot / E-Voting",
      "Related Party Transaction",
      "Investor Education and Protection Fund",
      "Unpaid and Unclaimed Dividend",
      "Credit Rating",
      "Miscellaneous",
      "Disclosure under SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011",
      "Transcripts",
      "Secretarial Compliance Report under Regulation 24A",
      "Contact Details of KMP for Materiality (Reg 30)",
    ],
  },

  {
    id: "financials",
    title: "Financials",
    children: ["Annual Report", "Financial Results"],
  },

  { id: "other", title: "Other" },
  { id: "other-disclosures", title: "Other Disclosures" },
];

/* -------------------------
   PAGE CONTENT — FULL MAPPING
------------------------- */
const CONTENT = {
  /* -----------------------------------------------------------------------
     CORPORATE GOVERNANCE (Already working fine)
  ----------------------------------------------------------------------- */
  "Criteria of Making Payments to Ned": {
    type: "pdf",
    title: "Criteria of Making Payments to Non Executive Directors",
    file: encodeURI(
      "/Corporate_Governance/Criteria_of_Making_Payments_to_Ned/Making_Payments_To_Ned.pdf",
    ),
  },

  "Appointment Letter to Independent Directors": {
    type: "pdf",
    title: "Appointment Letter to Independent Directors",
    file: encodeURI(
      "/Corporate_Governance/Appointment_Letter_to_Independent_Directors/Appointment_Letter_to_Independent_Directors.pdf",
    ),
  },

  "Familiarisation Programme for Independent Directors": {
    type: "multiple",
    title: "Familiarisation Programme for Independent Directors",
    files: [
      {
        name: "Details Of Familiarisation Programme & Attendance",
        file: encodeURI(
          "/Corporate_Governance/Familiarisation_programme_for_Independent_Directors/Details_Of_Familiarisation_Programme_and_Attendance.pdf",
        ),
      },
      {
        name: "Familiarisation Programme For Independent Director",
        file: encodeURI(
          "/Corporate_Governance/Familiarisation_programme_for_Independent_Directors/Familiarisation_Programme_For_Independent_Director.pdf",
        ),
      },
    ],
  },

  "Policies of The Company": {
    type: "multiple",
    title: "Policies of the Company",
    files: [
      {
        name: "Archival Policy",
        file: encodeURI(
          "/Corporate_Governance/Policies_of_the_company/Archival_Policy.pdf",
        ),
      },
      {
        name: "CSR Policy",
        file: encodeURI(
          "/Corporate_Governance/Policies_of_the_company/Corporate_Social_Responsibility_(CSR)_Policy.pdf",
        ),
      },
      {
        name: "Nomination & Remuneration Policy",
        file: encodeURI(
          "/Corporate_Governance/Policies_of_the_company/Nomination_&_Remuneration_Policy.pdf",
        ),
      },
      {
        name: "Materiality Determination Policy",
        file: encodeURI(
          "/Corporate_Governance/Policies_of_the_company/Policy_For_Determination_Of_Materiality_Of_Events_And_Information.pdf",
        ),
      },
      {
        name: "UPSI Leak Enquiry Policy",
        file: encodeURI(
          "/Corporate_Governance/Policies_of_the_company/Policy_for_Enquiry_in_case_of_leak_of_Unpublished_Price_Sensitive_Information (UPSI).pdf",
        ),
      },
      {
        name: "Document Preservation Policy",
        file: encodeURI(
          "/Corporate_Governance/Policies_of_the_company/Policy_on_Preservation_of_Documents.pdf",
        ),
      },
      {
        name: "Related Party Transaction Policy",
        file: encodeURI(
          "/Corporate_Governance/Policies_of_the_company/Related_Party_Transaction_Policy.pdf",
        ),
      },
      {
        name: "Risk Management Policy",
        file: encodeURI(
          "/Corporate_Governance/Policies_of_the_company/Risk_Management_Policy.pdf",
        ),
      },
      {
        name: "Succession Policy",
        file: encodeURI(
          "/Corporate_Governance/Policies_of_the_company/Succession_Policy.pdf",
        ),
      },
      {
        name: "Whistle Blower Policy",
        file: encodeURI(
          "/Corporate_Governance/Policies_of_the_company/Whistle_Blower_Policy.pdf",
        ),
      },
    ],
  },

  "Code of Conduct": {
    type: "multiple",
    title: "Code of Conduct",
    files: [
      {
        name: "Trading by Designated Persons – Regulation & Monitoring",
        file: encodeURI(
          "/Corporate_Governance/Code_of_Conduct/Code_Of_Conduct_For_Regulating_Monitoring_And_Reporting_of_Trading_By_Designated_Persons_and_their_Immediate_Relatives.pdf",
        ),
      },
      {
        name: "Fair Disclosure of UPSI",
        file: encodeURI(
          "/Corporate_Governance/Code_of_Conduct/Code_Of_Practices_And_Procedures_For_Fair_Disclosure_Of_Unpublished_Price_Sensitive_Information.pdf",
        ),
      },
    ],
  },

  /* -----------------------------------------------------------------------
     INVESTOR SERVICES (FULL 74 PDFs MAPPED)
  ----------------------------------------------------------------------- */

  /* ------------ MOA & AOA ------------ */
  "MOA & AOA": {
    type: "pdf",
    title: "MOA & AOA",
    file: encodeURI("/Investor_Services/MOA_&_AOA/MOA_&_AOA.pdf"),
  },

  /* ------------ CSR Annual Action Plan ------------ */
  "CSR Annual Action Plan": {
    type: "pdf",
    title: "CSR Annual Action Plan (2022-23)",
    file: encodeURI(
      "/Investor_Services/CSR_Annual_Action_Plan/CSR_Annual_Action_Plan_(2022-23).pdf",
    ),
  },

  /* ------------ EMPTY CATEGORIES ------------ */
  "Board of Directors": null,
  "Composition of Various Committees Board of Directors": null,
  "Details of Business": null,
  "Investor Grievance": null,
  "General Meeting Notice & Proxy": null,
  "Investor Education and Protection Fund": null,
  "Credit Rating": null,
  "Contact Details of KMP for Materiality (Reg 30)": null,

  /* ------------ Shareholding Pattern ------------ */
  "Shareholding Pattern": {
    type: "multiple",
    title: "Shareholding Pattern",
    files: [
      ...[
        "Shareholding_Pattern_For_The_Quarter_Ended_30th_June,2023.pdf",
        "Shareholding_Pattern_For_The_Quarter_Ended_30th_June,2024.pdf",
        "Shareholding_Pattern_For_The_Quarter_Ended_30thJune,2025.pdf",
        "Shareholding_Pattern_For_The_Quarter_Ended_30th_September,2023.pdf",
        "Shareholding_Pattern_For_The Quarter_Ended_30th_September,2024.pdf",
        "Shareholding_Pattern_For_The_Quarter_Ended_30th_September,2025.pdf",
        "Shareholding_Pattern_For_The_Quarter_Ended_31st_December,2023.pdf",
        "Shareholding_Pattern_For_The_Quarter_Ended_31st_December,2024.pdf",
        "Shareholding_Pattern_For_The_Quarter_Ended_31st_March,2024.pdf",
        "Shareholding_Pattern_For_The_Quarter_Ended_31st_March,2025.pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(`/Investor_Services/Shareholding_Pattern/${file}`),
      })),
    ],
  },

  /* ------------ Annual Return ------------ */
  "Annual Return": {
    type: "multiple",
    title: "Annual Return",
    files: [
      ...[
        "Annual_Return_(MGT-7)_31.03.2021.pdf",
        "Annual_Return_(MGT-7)_31.03.2022.pdf",
        "Annual_Return_(MGT-7)_31.03.2023.pdf",
        "Annual_Return_(MGT-7)_31.03.2024.pdf",
        "Annual_Return_(MGT-7)_31.03.2025.pdf",
        "Annual_Return_(MGT-9)_31.03.2019.pdf",
        "Annual_Return_(MGT-9)_31.03.2020.pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(`/Investor_Services/Annual_Return/${file}`),
      })),
    ],
  },

  /* ------------ Compliance Report ------------ */
  "Compliance Report on Corporate Governance": {
    type: "multiple",
    title: "Compliance Report on Corporate Governance",
    files: [
      ...[
        "Corporate_Governance_For_The_Quarter_Ended_30th_June,2024.pdf",
        "Corporate_Governance_For_The_Quarter_Ended_30th_September,2023.pdf",
        "Corporate_Governance_For_The_Quarter_Ended_30th_September,2024.pdf",
        "Corporate_Governance_For_The_Quarter_Ended_31st_December,2023.pdf",
        "Corporate_Governance_For_The_Quarter_Ended_31st_December,2024.pdf",
        "Corporate_Governance_For_The_Quarter_Ended_31st_March,2024.pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(
          `/Investor_Services/Compliance_Report_on_Corporate_Governance/${file}`,
        ),
      })),
    ],
  },

  /* ------------ Notice of Board Meeting ------------ */
  "Notice of Board Meeting": {
    type: "multiple",
    title: "Notice of Board Meeting",
    files: [
      ...[
        "Notice_of_Board_Meeting_19th_August,2025.pdf",
        "Notice_of_Board_Meeting_22nd_May,2025.pdf",
        "Notice_of_Board_Meeting_ 30th_January,2025.pdf",
        "Notice_of_Board_Meeting_6th_August,2025.pdf",
        "Notice_of_Board_Meeting_6th_February,2025.pdf",
        "Notice_of_Board_Meeting_8th_November,2025.pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(`/Investor_Services/Notice_of_Board_Meeting/${file}`),
      })),
    ],
  },

  /* ------------ Newspaper Publication ------------ */
  "Newspaper Publication": {
    type: "multiple",
    title: "Newspaper Publication",
    files: [
      ...[
        "Newspaper_Publication_on_14.08.2025.pdf",
        "Newspaper_Publication_on_15.02.2025.pdf",
        "Newspaper_Publication_on_23.08.2025.pdf",
        "Newspaper_Publication_on_27.08.2025.pdf",
        "Newspaper_Publication_on_29.05.2025.pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(`/Investor_Services/Newspaper_Publication/${file}`),
      })),
    ],
  },

  /* ------------ Regulation 30 LODR ------------ */
  "Disclosure Under Regulation 30 Of SEBI LODR": {
    type: "multiple",
    title: "Disclosure Under Regulation 30 Of SEBI LODR",
    files: [
      ...[
        "Closure_of_Trading_Window_(24.09.2025).pdf",
        "Intimation_for_execution_of_Agreement_pertaining_to_sale_of_Wind_Mill_(K-342).pdf",
        "Outcome_of_46th_Annual_General_Meeting_19.09.2025.pdf",
        "Outcome_of_Board_Meeting_22nd_August,2025.pdf",
        "Resignation_of_Director_of_the_Company_(05.11.2025).pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(
          `/Investor_Services/Disclosure_Under_Regulation_30_Of_SEBI_LODR/${file}`,
        ),
      })),
    ],
  },

  /* ------------ Notice of AGM ------------ */
  "Notice of AGM": {
    type: "multiple",
    title: "Notice of Annual General Meeting",
    files: [
      ...[
        "Notice_of_Annual_General_Meeting_For_The_Year_Ended_31st_March,2021.pdf",
        "Notice_of_Annual_General_Meeting_For_The_Year_Ended_31st_March,2022.pdf",
        "Notice_of_Annual_General_Meeting_For_The_Year_Ended_31st_March,2023.pdf",
        "Notice_of_Annual_General_Meeting_For_The_Year_Ended_31st_March,2024.pdf",
        "Notice_of_Annual_General_Meeting_For_The_Year_Ended_31st_March,2025.pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(`/Investor_Services/Notice_of_AGM/${file}`),
      })),
    ],
  },

  /* ------------ Notice of Postal Ballot ------------ */
  "Notice of Postal Ballot": {
    type: "multiple",
    title: "Notice of Postal Ballot",
    files: [
      ...[
        "Notice_of_Postal_Ballot_(16.05.2018).pdf",
        "Notice_of_Postal_Ballot_(17.02.2021).pdf",
        "Notice_of_Postal_Ballot_(20.04.2022).pdf",
        "Notice_of_Postal_Ballot_(28.11.2017).pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(`/Investor_Services/Notice_of_Postal_Ballot/${file}`),
      })),
    ],
  },

  /* ------------ Results of Postal Ballot ------------ */
  "Results Of Postal Ballot / E-Voting": {
    type: "multiple",
    title: "Results of Postal Ballot / E-Voting",
    files: [
      ...[
        "E-voting_Result_of_43rd_AGM_21st_September_2022.pdf",
        "E-voting_Result_of_44th_AGM_29th_September_2023.pdf",
        "E-voting_Result_of_45th_AGM_27th_September_2024.pdf",
        "E-voting_Result_of_46th_AGM_19th_September_2025.pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(
          `/Investor_Services/Results_Of_Postal_Ballot_E_Voting/${file}`,
        ),
      })),
    ],
  },

  /* ------------ Related Party Transactions ------------ */
  "Related Party Transaction": {
    type: "multiple",
    title: "Related Party Transaction",
    files: [
      ...[
        "Related_Party_Transaction_for_the_half_year_ended_30th_September,2022.pdf",
        "Related_Party_Transaction_for_the_half_year_ended_30th_September,2023.pdf",
        "Related_Party_Transaction_for_the_half_year_ended_30th_September,2024.pdf",
        "Related_Party_Transactions_for_the_half_year_ended_31st_March,2023.pdf",
        "Related_Party_Transactions_for_the_half_year_ended_31st_March,2024.pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(`/Investor_Services/Related_Party_Transaction/${file}`),
      })),
    ],
  },

  /* ------------ Unpaid & Unclaimed Dividend ------------ */
  "Unpaid and Unclaimed Dividend": {
    type: "pdf",
    title: "Unpaid and Unclaimed Dividend",
    file: encodeURI(
      `/Investor_Services/Unpaid_and_Unclaimed_Dividend/Nodal_Officer_IEPF.pdf`,
    ),
  },

  /* ------------ Miscellaneous ------------ */
  Miscellaneous: {
    type: "multiple",
    title: "Miscellaneous",
    files: [
      ...[
        "Annual_return.pdf",
        "Change_Cancellation_of_Nomination_(SH_14).pdf",
        "Declaration_form_for_Opting_out_of_Nomination_Cancellation_of_Nomination_(ISR-3).pdf",
        "Request_for_issue_of_Duplicate_Certificate_and_other_Service_Requests_(ISR-4).pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(`/Investor_Services/Miscellaneous/${file}`),
      })),
    ],
  },

  /* ------------ SEBI Takeover Regulations ------------ */
  "Disclosure under SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011":
    {
      type: "pdf",
      title: "SEBI Substantial Acquisition Disclosures",
      file: encodeURI(
        "/Investor_Services/Disclosure_under_SEBI_(Substantial_Acquisition_of_Shares_and_Takeovers)_Regulations,2011/Additional_Disclosure_for_pledge_of_shares_under_Regulation_31(1)_by_Promoters_as_on_30.09.2019_(04.10.2019).pdf",
      ),
    },

  /* ------------ Transcripts ------------ */
  Transcripts: {
    type: "multiple",
    title: "Transcripts",
    files: [
      ...[
        "Transcript_of_42nd_Annual_General_Meeting.pdf",
        "Transcript_of_43rd_Annual_General_Meeting.pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(`/Investor_Services/Transcipts/${file}`),
      })),
    ],
  },

  /* ------------ Secretarial Compliance Report ------------ */
  "Secretarial Compliance Report under Regulation 24A": {
    type: "multiple",
    title: "Secretarial Compliance Report",
    files: [
      ...[
        "Secretarial_Compliance_Report_under_Regulation_24A_for_the_year_ended_31st_March,2019.pdf",
        "Secretarial_Compliance_Report_under_Regulation_24A_for_the_year_ended_31st_March,2020.pdf",
        "Secretarial_Compliance_Report_under_Regulation_24A_for_the_year_ended_31st_March,2021.pdf",
        "Secretarial_Compliance_Report_under_Regulation_24A_for_the_year_ended_31st_March,2022.pdf",
        "Secretarial_Compliance_Report_under_Regulation_24A_for_the_year_ended_31st_March,2023.pdf",
        "Secretarial_Compliance_Report_under_Regulation_24A_for_the_year_ended_31st_March,2024.pdf",
        "Secretarial_Compliance_Report_under_Regulation_24A_for_the_year_ended_31st March,2025.pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(
          `/Investor_Services/Secretarial_Compliance_Report_under_Regulation_24A/${file}`,
        ),
      })),
    ],
  },

  /* -----------------------------------------------------------------------
   FINANCIALS SECTION
----------------------------------------------------------------------- */

  "Annual Report": {
    type: "multiple",
    title: "Annual Report",
    files: [
      ...[
        "Annual_Report_31st_March_2010.pdf",
        "Annual_Report_31st_March_2011.pdf",
        "Annual_Report_31st_March_2012.pdf",
        "Annual_Report_31st_March_2013.pdf",
        "Annual_Report_31st_March_2014.pdf",
        "Annual_Report_31st_March_2015.pdf",
        "Annual_Report_31st_March_2016.pdf",
        "Annual_Report_31st_March_2017.pdf",
        "Annual_Report_31st_March_2018.pdf",
        "Annual_Report_31st_March_2019.pdf",
        "Annual_Report_31st_March_2020.pdf",
        "Annual_Report_31st_March_2021.pdf",
        "Annual_Report_31st_March_2022.pdf",
        "Annual_Report_31st_March_2023.pdf",
        "Annual_Report_31st_March_2024.pdf",
        "Annual_Report_31st_March_2025.pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(`/Financials/Annual_Report/${file}`),
      })),
    ],
  },

  "Financial Results": {
    type: "multiple",
    title: "Financial Results",
    files: [
      ...[
        "Audited_Financial_Results_For_The_Quarter_And_Year_Ended_31st_March,2023.pdf",
        "Audited_Financial_Results_For_The_Quarter_And_Year_Ended_31st_March,2024.pdf",
        "Audited_Financial_Results_For_The_Quarter_And_Year_Ended_31st_March,2025.pdf",
        "Unaudited Financial_Results_for_the_Quarter_and_Nine_Months_Ended_30th_June,2023.pdf",
        "Unaudited_Financial_Results_for_the_Quarter_and_Nine_Months_Ended_31st_December,2023.pdf",
        "Unaudited_Financial_Results_for_the_Quarter_Ended_30th_June,2024.pdf",
        "Unaudited_Financial_Results_for_the_Quarter_Ended_30th_June,2025.pdf",
        "Unaudited_Financial_Results_for_the_Quarter_Ended_30th_September,2023.pdf",
        "Unaudited_Financial_Results_for_the_Quarter_Ended_30th_September,2024.pdf",
        "Unaudited_Financial_Results_for_the_Quarter_Ended_31st_December,2024.pdf",
      ].map((file) => ({
        name: file.replace(".pdf", ""),
        file: encodeURI(`/Financials/Financials_Results/${file}`),
      })),
    ],
  },
};
/* ------------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------------ */
export default function InvestorsCorner() {
  const [activeMain, setActiveMain] = useState("disclosure-46");
  const [activeChild, setActiveChild] = useState(null);
  const [expanded, setExpanded] = useState([]);
  const [openPDF, setOpenPDF] = useState(null);

  const toggleExpand = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const currentSectionDesc =
    SECTION_DESCRIPTIONS[activeMain] || "Select a section to view details.";

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* HEADER */}
        <section className="py-6 bg-gradient-to-b from-neutral-900 to-black text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Investor’s Corner
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Official disclosures, governance documents, reports & investor
            services — organized for easy access.
          </p>
        </section>

        {/* GRID */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-[300px_1fr] gap-10">
          {/* SIDEBAR */}
          <aside className="bg-neutral-950/40 border border-neutral-800 rounded-2xl p-4 h-fit sticky top-20">
            {NAV.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => {
                    setActiveMain(section.id);
                    setActiveChild(null);
                    if (section.children) toggleExpand(section.id);
                  }}
                  className={`w-full px-4 py-3 rounded-lg flex justify-between items-center 
                    ${
                      activeMain === section.id
                        ? "bg-blue-600/20 border border-blue-700 text-blue-300"
                        : "hover:bg-neutral-900/60 text-gray-300"
                    }`}
                >
                  {section.title}
                  {section.children && (
                    <span className="text-gray-500">
                      {expanded.includes(section.id) ? "−" : "+"}
                    </span>
                  )}
                </button>

                {/* CHILDREN */}
                <AnimatePresence>
                  {section.children && expanded.includes(section.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-2 border-l border-neutral-800"
                    >
                      {section.children.map((child) => (
                        <button
                          key={child}
                          onClick={() => setActiveChild(child)}
                          className={`block w-full px-4 py-2 text-left rounded-lg my-1
                            ${
                              activeChild === child
                                ? "bg-blue-600/20 text-blue-300"
                                : "text-gray-400 hover:bg-neutral-900/60"
                            }`}
                        >
                          {child}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </aside>

          {/* CONTENT AREA */}
          <section className="bg-neutral-950/40 border border-neutral-800 rounded-2xl p-10 min-h-[60vh] shadow-xl">
            {/* Animated Block */}
            <motion.div
              key={activeMain + activeChild}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                {activeChild || NAV.find((x) => x.id === activeMain)?.title}
              </h2>

              {/* NO CHILD SELECTED → SHOW DESCRIPTION */}
              {!activeChild && (
                <div className="text-gray-400 max-w-2xl leading-relaxed text-lg">
                  {currentSectionDesc.split("\n").map((line, i) => (
                    <p key={i} className="mb-3">
                      {line.trim()}
                    </p>
                  ))}
                </div>
              )}

              {/* SINGLE PDF */}
              {CONTENT[activeChild]?.type === "pdf" && (
                <div
                  onClick={() => setOpenPDF(CONTENT[activeChild])}
                  className="cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 
                  hover:bg-neutral-900 hover:border-neutral-700 transition flex justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200">
                      {CONTENT[activeChild].title}
                    </h3>
                    <p className="text-gray-500 text-sm">PDF Document</p>
                  </div>
                  <span className="text-2xl text-gray-500 group-hover:text-white">
                    ›
                  </span>
                </div>
              )}

              {/* MULTIPLE PDF */}
              {CONTENT[activeChild]?.type === "multiple" && (
                <div className="space-y-4">
                  {CONTENT[activeChild].files.map((pdf, idx) => (
                    <div
                      key={idx}
                      onClick={() =>
                        setOpenPDF({ title: pdf.name, file: pdf.file })
                      }
                      className="cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 
                      hover:bg-neutral-900 hover:border-neutral-700 transition flex justify-between"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-gray-200">
                          {pdf.name}
                        </h3>
                        <p className="text-gray-500 text-sm">PDF Document</p>
                      </div>
                      <span className="text-2xl text-gray-500">›</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </section>
        </div>
      </main>

      {/* PDF MODAL */}
      <AnimatePresence>
        {openPDF && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-neutral-900 rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] overflow-hidden border border-neutral-700"
            >
              <div className="flex justify-between items-center p-4 border-b border-neutral-700">
                <h3 className="text-xl font-semibold text-blue-300">
                  {openPDF.title}
                </h3>
                <button
                  onClick={() => setOpenPDF(null)}
                  className="text-gray-300 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <iframe src={openPDF.file} className="w-full h-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
