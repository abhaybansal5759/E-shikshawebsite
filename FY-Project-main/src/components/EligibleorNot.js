import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";

function EligibilityCheck() {
    // Define an array of scholarship objects
    const scholarships = [
        {
            title: "L'Oréal India For Young Women In Science Scholarships 2023-24",
            deadline: "07-Jan-2024",
            eligibility: [
                "Women candidates who have passed Class 12 in Science stream from India in the academic year 2022-23",
                "Must have scored a minimum of 85% in PCM/PCB/PCMB in Class 12",
                "Annual family income of the applicant should be less than INR 6,00,000",
                "Must be taking admission to undergraduate (bachelor’s) programs in science-related fields in the academic year 2023-24"
            ],
            applyLink: "https://www.buddy4study.com/article/scholarships-for-undergraduates"
        },
        {
            title: "G. P. Birla Scholarship 2023",
            deadline: "Closed",
            eligibility: [
                "Be a citizen of West Bengal",
                "Have passed the class 12 examination in the year 2023",
                "Have secured 85% marks or more from WBCHSE (West Bengal Council of Higher Secondary Education) or 90% or more from ISC/CBSE",
                "Be pursuing undergraduate courses in streams such as Science, Commerce, Arts, Engineering, Medicine, Architecture, Law, Chartered Accountancy, Company Secretary, and Cost Accountancy from any recognized University/Institution in India",
                "Have an annual family income of less than INR 3,00,000 (Note -  For extra meritorious students, maximum family income criteria may be relaxed in specific cases at the Trustees' discretion) OR need financial help to pursue further studies"
            ],
            benefits: [
                "Scholarship of up to INR 50,000 per year to cover the tuition fees and hostel fees",
                "Additional one-time payment of INR 7,000 towards the purchase of books in the first year of college"
            ],
            applyLink: "https://www.buddy4study.com/article/scholarships-for-undergraduates"
        },
        {
            "title": "Sitaram Jindal Foundation Scholarship Scheme 2024",
            "deadline": "Always Open",
            "eligibility": [
              "Studying in Class 11/12/ITI/diploma/graduation/postgraduation"
            ],
           
            "applyLink": "https://www.buddy4study.com/scholarship/sitaram-jindal-foundation-scholarship-scheme"
          }
          
        // Add more scholarship objects as needed
    ];

    return (
        <div className="max-w-3xl mx-auto px-6 py-8">
            <h2 className="text-2xl font-semibold text-center mb-4">Scholarships Available</h2>
            <div className="flex flex-wrap gap-4">
                {scholarships.map((scholarship, index) => (
                    <Card key={index} className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                            <h2>{scholarship.title}</h2>
                            <div className="flex flex-col">
                                <p className="text-md">Deadline: {scholarship.deadline}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>All applicants need to fulfill the following eligibility conditions:</p>
                            <ul className="list-disc ml-5">
                                {scholarship.eligibility.map((condition, index) => (
                                    <li key={index}>{condition}</li>
                                ))}
                            </ul>
                            {scholarship.benefits && (
                                <>
                                    <p>Benefits:</p>
                                    <ul className="list-disc ml-5">
                                        {scholarship.benefits.map((benefit, index) => (
                                            <li key={index}>{benefit}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            {scholarship.applyLink && (
                                <Link
                                    isExternal
                                    showAnchorIcon
                                    href={scholarship.applyLink}
                                >
                                    Apply
                                </Link>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default EligibilityCheck;
