import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const team = [
    {
      name: "Tonmoy Saha",
      qualifications: [
        "BPT (WBUHS)",
        "MPT-Neurology (WBUHS)",
        "MIAP",
        "M.FIMT",
        "CDNT (UK)",
      ],
      current_roles: {
        department_incharge:
          "LIVGASTRO Center for Integrative Liver Gastro Care, Kolkata",
        chief_physiotherapist:
          "Horizone Life Line Multispeciality Hospital, Kolkata",
        founder: "RGS REHABCARE",
      },
      past_experience: [
        "Ex-Physiotherapist: Desun Hospital and Heart Institute, Kolkata",
      ],
      education: [
        "Master of Physiotherapy in Neurology (West Bengal University of Health Sciences)",
      ],
      certifications: [
        "Certified Dry Needling Therapist (CPD-UK)",
        "Certificate in Cupping Therapy",
      ],
      memberships: [
        "Federation of Indian Manual Therapist",
        "Indian Association of Physiotherapist",
      ],
      image: "/tonmoy.svg",
    },
    {
      name: "Sanhita Ghosh",
      qualifications: [
        "General Nursing and Midwifery",
        "Higher Secondary Education",
      ],
      current_roles: {
        staff_nurse: "PARKVIEW Super Speciality Hospital, Kolkata",
      },
      education: ["Diploma in Nursing"],
      image: "/sahita.svg",
    },
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description:
        "Every decision we make is guided by what's best for our customers and their well-being.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we deliver to our customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-16 py-12">
        {/* Story Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  At{" "}
                  <span className="font-semibold text-primary">
                    Pinakdev Healthcare & Hospitality
                  </span>
                  , our journey began with a simple belief —{" "}
                  <span className="italic">
                    healing should be compassionate, accessible, and dignified
                  </span>
                  . We recognized that both healthcare and hospitality share one
                  powerful foundation:{" "}
                  <span className="font-medium text-gray-900">care for people</span>.
                </p>

                <p>
                  Our healthcare services have been designed to ensure the best
                  possible patient care in a comfortable and relaxed environment
                  along with ease of access. This is an excellent facility for
                  patients recovering from injury, sports injury, or
                  post-operative rehabilitation. At RGS REHABCARE, our goal is to
                  provide the highest level of patient care.
                </p>

                <p>
                  In hospitality, we extend the same principles of comfort and
                  trust. Whether it's through curated patient accommodations,
                  supportive environments, or staff trained to prioritize empathy,
                  we make sure every individual feels at home during their journey
                  with us.
                </p>

                <p className="text-lg font-semibold text-primary">
                  For us, healthcare and hospitality are not two industries — they
                  are one shared mission:{" "}
                  <span className="underline decoration-primary">
                    to serve people with excellence and compassion
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-full overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src="/logo.svg"
                  alt="logo image"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and every solution we
                build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((val, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 text-primary">{val.icon}</div>
                    <CardTitle className="text-xl">{val.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {val.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The experienced leaders driving innovation and growth at Pinakdev
              Healthcare & Hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-left">
                  {member.qualifications && (
                    <div>
                      <h4 className="font-semibold text-gray-800">Qualifications</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {member.qualifications.map((q, i) => (
                          <li key={i}>{q}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.current_roles && (
                    <div>
                      <h4 className="font-semibold text-gray-800">Current Roles</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {Object.entries(member.current_roles).map(([, value], i) => (
                          <li key={i}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.past_experience && (
                    <div>
                      <h4 className="font-semibold text-gray-800">Past Experience</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {member.past_experience.map((exp, i) => (
                          <li key={i}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.education && (
                    <div>
                      <h4 className="font-semibold text-gray-800">Education</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {member.education.map((edu, i) => (
                          <li key={i}>{edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.certifications && (
                    <div>
                      <h4 className="font-semibold text-gray-800">Certifications</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {member.certifications.map((cert, i) => (
                          <li key={i}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.memberships && (
                    <div>
                      <h4 className="font-semibold text-gray-800">Memberships</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {member.memberships.map((mem, i) => (
                          <li key={i}>{mem}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
