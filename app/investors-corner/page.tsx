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
   MAIN COMPONENT
------------------------- */
export default function InvestorsCorner() {
  const [activeMain, setActiveMain] = useState("disclosure-46");
  const [activeChild, setActiveChild] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
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
        {/* ------------------ SIDEBAR ------------------ */}
        <aside className="bg-neutral-950/40 border border-neutral-800 rounded-2xl p-4 h-fit sticky top-24">
          {NAV.map((section) => (
            <div key={section.id} className="mb-1">
              {/* MAIN BUTTON */}
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

              {/* SUBMENU */}
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

        {/* ------------------ CONTENT AREA ------------------ */}
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

            <p className="text-gray-300 leading-relaxed">
              This section will display PDFs, tables, links or disclosures.
              Replace this placeholder with actual file downloads, reports,
              document viewers or embedded content.
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
