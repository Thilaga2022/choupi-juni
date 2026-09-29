import { Link } from "react-router-dom";

function About() {
    const values = [
        {
            number: "01",
            title: "Thoughtfully Chosen",
            description:
                "Every product is carefully selected with attention to quality, usefulness and everyday appeal.",
        },
        {
            number: "02",
            title: "Quality Matters",
            description:
                "From selection to packing, we pay attention to the details that make every order feel special.",
        },
        {
            number: "03",
            title: "Made With Care",
            description:
                "Behind every order is a team that takes pride in doing things thoughtfully and with care.",
        },
        {
            number: "04",
            title: "Growing Together",
            description:
                "We believe a strong business is built by creating opportunities, supporting one another and growing together.",
        },
    ];

    return (
        <main>
            {/* Introduction */}
            <section className="px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-5xl">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#2878B8]">
                        About Us
                    </p>

                    <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-[#293241] sm:text-6xl">
                        Thoughtfully chosen.
                        <br />
                        <span className="text-[#2878B8]">
                            Made with care.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-[#293241]/70">
                        Behind every product is a story of care, thoughtful
                        choices and people who believe in doing things well.
                    </p>
                </div>
            </section>

            {/* Mother's Perspective */}
            <section className="bg-[#FFF9F0] px-6 py-20 sm:py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-20">

                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-[#2878B8]">
                                A Mother's Perspective
                            </p>

                            <div className="mt-5 h-1 w-16 rounded-full bg-[#FFD95A]" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-[#293241] sm:text-4xl">
                                Founded with a mother's love and perspective.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-[#293241]/70">
                                Every product in our collection is handpicked with the same
                                love and attention we give to our own family.
                            </p>

                            <p className="mt-5 leading-7 text-[#293241]/70">
                                What started with a simple perspective has grown
                                into a collection built around thoughtful
                                choices, everyday usefulness and products that
                                bring a little more joy to daily life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Behind The Brand */}
            <section className="px-6 py-20 sm:py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">

                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-[#2878B8]">
                                The Team Behind The Brand
                            </p>

                            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#293241] sm:text-4xl">
                                A dedicated team behind every order.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-[#293241]/70">
                                From careful quality checks to thoughtfully packed
                                orders, our dedicated team works behind the scenes
                                to make sure every order receives the attention it
                                deserves.
                            </p>

                            <p className="mt-5 leading-7 text-[#293241]/70">
                                Every person plays an important role in bringing
                                your order to you. We believe in creating a
                                supportive environment where people can contribute,
                                grow and build something meaningful together.
                            </p>
                        </div>

                        <div>
                            <div className="rounded-3xl bg-[#EAF5FF] p-8 sm:p-12">
                                <div className="rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">
                                    <p className="text-4xl font-bold text-[#2878B8] sm:text-5xl">
                                        With Care
                                    </p>

                                    <p className="mt-3 text-xl font-bold text-[#293241]">
                                        Behind Every Order
                                    </p>

                                    <p className="mx-auto mt-4 max-w-xs leading-7 text-[#293241]/70">
                                        Thoughtfully checked, carefully packed and
                                        prepared with attention to detail.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* What We Stand For */}
            <section className="bg-[#FFF9F0] px-6 py-20 sm:py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-[#2878B8]">
                            What We Stand For
                        </p>

                        <h2 className="mt-4 text-3xl font-bold text-[#293241] sm:text-4xl">
                            The values behind what we do.
                        </h2>

                        <p className="mt-5 leading-7 text-[#293241]/70">
                            From the products we choose to the way we prepare
                            every order, these principles guide us every day.
                        </p>
                    </div>

                    <div className="mt-14 divide-y divide-[#D9ECFA] border-y border-[#D9ECFA]">
                        {values.map((value) => (
                            <div
                                key={value.number}
                                className="grid gap-4 py-8 sm:grid-cols-[80px_1fr_1.5fr] sm:items-start sm:gap-8"
                            >
                                <span className="text-sm font-bold text-[#6CB4EE]">
                                    {value.number}
                                </span>

                                <h3 className="text-xl font-bold text-[#293241]">
                                    {value.title}
                                </h3>

                                <p className="max-w-xl leading-7 text-[#293241]/70">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing Statement */}
            <section className="px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-3xl font-bold leading-tight text-[#293241] sm:text-5xl">
                        Every order has a little bit of our story in it.
                    </p>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#293241]/70">
                        Thank you for being part of our journey and supporting
                        the people behind the brand.
                    </p>

                    <Link
                        to="/products"
                        className="mt-8 inline-block rounded-full bg-[#6CB4EE] px-7 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#2878B8] hover:shadow-lg"
                    >
                        Explore Our Collection
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default About;