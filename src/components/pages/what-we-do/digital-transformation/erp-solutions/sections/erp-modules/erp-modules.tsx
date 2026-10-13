
import {
  CircleDollarSign,
  Truck,
  ClipboardList,
  Warehouse,
  Factory,
  Users,
  ShoppingCart,
  ChartNoAxesColumnIncreasing,
  Sparkles,
} from "lucide-react";

type ERPModule = {
  title: string;
  description: string;
  tags: string[];
  Icon: typeof CircleDollarSign;
};

const modules: ERPModule[] = [
  {
    title: "Finance & Accounting",
    description:
      "General ledger, AP/AR, multi-entity consolidation, and a month-end close that takes days, not weeks—with board-ready financials always one click away.",
    tags: ["GL & AP/AR", "Consolidation", "Audit Trails"],
    Icon: CircleDollarSign,
  },
  {
    title: "Supply Chain & Inventory",
    description:
      "Procurement, multi-warehouse stock, and demand planning that keep the right inventory in the right place.",
    tags: ["Procurement", "Demand Planning"],
    Icon: Truck,
  },
  {
    title: "Procurement & Vendor Management",
    description:
      "End-to-end purchasing, from requisitions and approvals to purchase orders and vendor performance, with spend control and supplier records that keep procurement compliant and cost-aware.",
    tags: ["Purchase Orders", "Vendor Management"],
    Icon: ClipboardList,
  },
  {
    title: "Warehouse Management",
    description:
      "Bin-level control, picking, packing, and barcode-driven workflows that connect the physical warehouse to your inventory and order data in real time.",
    tags: ["Picking & Packing", "Barcode Workflows"],
    Icon: Warehouse,
  },
  {
    title: "Manufacturing & Production",
    description:
      "BOMs, MRP, and shop-floor control that connect planning to what actually ships.",
    tags: ["MRP", "BOM"],
    Icon: Factory,
  },
  {
    title: "HR & Payroll",
    description:
      "Employee lifecycle, time, and payroll—one record from hire to retire.",
    tags: ["Payroll", "Time & Attendance"],
    Icon: Users,
  },
  {
    title: "Sales & Order Management",
    description:
      "Quote-to-cash, fulfillment, and returns wired straight into finance and inventory—no re-keying between systems.",
    tags: ["Quote-To-Cash", "Fulfillment"],
    Icon: ShoppingCart,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Real-time, role-based dashboards that turn operational data into decisions for every level of the business.",
    tags: ["Live Dashboards", "Forecasting"],
    Icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "AI-Powered ERP",
    description:
      "Demand forecasting, financial anomaly detection, and intelligent document processing that turn ERP data into early signals—built on your platform's native AI or layered on top where it pays off.",
    tags: [
      "Demand Forecasting",
      "Anomaly Detection",
      "Document Processing",
    ],
    Icon: Sparkles,
  },
];

const ERPModules = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section heading */}
        <div className="mb-10 sm:mb-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What We Deliver
            </span>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-inter text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-6xl lg:text-7xl">
              One System.
              <br />
              <span className="text-gray-300">
                Every Department.
              </span>
            </h2>

            <div className="flex max-w-md gap-4 lg:pb-3">
              <div className="w-[3px] flex-shrink-0 bg-primary" />
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                Modules that replace a patchwork of disconnected tools
                with a single platform your entire organization runs on.
              </p>
            </div>
          </div>
        </div>

        {/* ERP module cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {modules.map(({ title, description, tags, Icon }) => (
            <article
              key={title}
              className="group relative flex flex-col overflow-hidden border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8 lg:p-9"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                {title}
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-gray-600 lg:text-base">
                {description}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2 border-t border-gray-100 pt-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center border border-gray-300 px-2.5 py-1 text-xs font-medium text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPModules;
