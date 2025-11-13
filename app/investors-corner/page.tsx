"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
   PAGE CONTENT (ALL PDFs)
------------------------- */
const CONTENT = {
  /* ------------------------------
      Single PDF
  ------------------------------ */
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

  /* ------------------------------
      Multiple PDFs
  ------------------------------ */
  "Familiarisation Programme for Independent Directors": {
    type: "multiple",
    title: "Familiarisation Programme for Independent Directors",
    files: [
      {
        name: "Details Of Familiarisation Programme and Attendance",
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
};

/* -------------------------
   MAIN COMPONENT
------------------------- */
export default function InvestorsCorner() {
  const [activeMain, setActiveMain] = useState("disclosure-46");
  const [activeChild, setActiveChild] = useState(null);
  const [expanded, setExpanded] = useState([]);
  const [openPDF, setOpenPDF] = useState(null);

  const toggleExpand = (id) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="py-16 bg-gradient-to-b from-neutral-900 to-black text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Investor’s Corner
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Official disclosures, governance documents, reports and investor
            services — organized cleanly for easy access.
          </p>
        </section>

        {/* MAIN GRID */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-[300px_1fr] gap-10">
          {/* SIDEBAR */}
          <aside className="bg-neutral-950/40 border border-neutral-800 rounded-2xl p-4 h-fit sticky top-24">
            {NAV.map((section) => (
              <div key={section.id} className="mb-1">
                <button
                  onClick={() => {
                    setActiveMain(section.id);
                    setActiveChild(null);
                    if (section.children) toggleExpand(section.id);
                  }}
                  className={`w-full flex justify-between items-center px-4 py-3 text-left rounded-lg transition
                    ${
                      activeMain === section.id
                        ? "bg-blue-600/20 border border-blue-700 text-blue-300"
                        : "hover:bg-neutral-900/60 text-gray-300"
                    }
                  `}
                >
                  {section.title}
                  {section.children && (
                    <span className="text-gray-500">
                      {expanded.includes(section.id) ? "−" : "+"}
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {section.children && expanded.includes(section.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-2 mt-2 border-l border-neutral-800"
                    >
                      {section.children.map((child) => (
                        <button
                          key={child}
                          onClick={() => {
                            setActiveMain(section.id);
                            setActiveChild(child);
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm rounded-lg my-1
                            ${
                              activeChild === child
                                ? "bg-blue-600/20 text-blue-300"
                                : "text-gray-400 hover:bg-neutral-900/60"
                            }
                          `}
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
            <motion.div
              key={activeMain + activeChild}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                {activeChild || NAV.find((x) => x.id === activeMain)?.title}
              </h2>

              {/* ----------- SINGLE PDF ----------- */}
              {CONTENT[activeChild]?.type === "pdf" && (
                <div
                  onClick={() => setOpenPDF(CONTENT[activeChild])}
                  className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 
                             hover:bg-neutral-900 hover:border-neutral-700 
                             transition-all duration-200 flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold text-gray-200 group-hover:text-white">
                      {CONTENT[activeChild].title}
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-gray-400">
                      PDF Document • 1 File
                    </span>
                  </div>

                  <span className="text-gray-500 group-hover:text-white transition-transform duration-200 group-hover:translate-x-1 text-2xl">
                    ›
                  </span>
                </div>
              )}

              {/* ----------- MULTIPLE PDFs ----------- */}
              {CONTENT[activeChild]?.type === "multiple" && (
                <div className="space-y-4">
                  {CONTENT[activeChild].files.map((pdf, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        setOpenPDF({ title: pdf.name, file: pdf.file })
                      }
                      className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 
                                 hover:bg-neutral-900 hover:border-neutral-700 
                                 transition-all duration-200 flex items-center justify-between"
                    >
                      <div className="flex flex-col">
                        <span className="text-lg font-semibold text-gray-200 group-hover:text-white">
                          {pdf.name}
                        </span>
                        <span className="text-sm text-gray-500 group-hover:text-gray-400">
                          PDF Document
                        </span>
                      </div>

                      <span className="text-gray-500 group-hover:text-white transition-transform duration-200 group-hover:translate-x-1 text-2xl">
                        ›
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {!CONTENT[activeChild] && (
                <p className="text-gray-300">
                  Select an item from the sidebar to view documents.
                </p>
              )}
            </motion.div>
          </section>
        </div>
      </main>

      {/* MODAL PDF PREVIEW */}
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
