export default function OurServices() {
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      featured: true,
    },
    {
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after-sales support.",
    },
    {
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which include warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main dark container */}
        <div className="bg-emerald-900 rounded-3xl p-10 shadow-xl text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Services
          </h2>

          <p className="text-emerald-100 max-w-2xl mx-auto text-sm md:text-base mb-10">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero
            hassle. From personal packages to business shipments — we deliver on
            time, every time.
          </p>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service, i) => (
              <div
                key={i}
                className={
                  "relative rounded-xl p-8 min-h-[220px] shadow-md text-left transition-transform transform hover:-translate-y-1 " +
                  (service.featured
                    ? "bg-[#ff7a00] text-black"
                    : "bg-white text-emerald-900")
                }
              >
                {/* Round Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div
                    className={
                      "w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-md " +
                      (service.featured ? "ring-4 ring-lime-200" : "")
                    }
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0F4C3A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 7h12v9H3z" />
                      <path d="M15 11h4l2 3v2h-6v-5z" />
                      <circle cx="7.5" cy="18.5" r="1.5" />
                      <circle cx="17.5" cy="18.5" r="1.5" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-center mt-8 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-emerald-900/80 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
