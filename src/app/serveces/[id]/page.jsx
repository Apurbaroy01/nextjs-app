import React from 'react';

const Page = async ({ params }) => {
    const { id } = await params;



    const persons = [
        { id: "u001", name: "Arif Hossain", image: "https://randomuser.me/api/portraits/men/1.jpg", city: "Dhaka" },
        { id: "u002", name: "Rafiq Ahmed", image: "https://randomuser.me/api/portraits/men/2.jpg", city: "Chattogram" },
        { id: "u003", name: "Samiul Karim", image: "https://randomuser.me/api/portraits/men/3.jpg", city: "Sylhet" },
        { id: "u004", name: "Mahbub Alam", image: "https://randomuser.me/api/portraits/men/4.jpg", city: "Khulna" },
        { id: "u005", name: "Tanvir Rahman", image: "https://randomuser.me/api/portraits/men/5.jpg", city: "Rajshahi" },
        { id: "u006", name: "Javed Mia", image: "https://randomuser.me/api/portraits/men/6.jpg", city: "Barishal" },
        { id: "u007", name: "Imran Sheikh", image: "https://randomuser.me/api/portraits/men/7.jpg", city: "Rangpur" },
        { id: "u008", name: "Faisal Khan", image: "https://randomuser.me/api/portraits/men/8.jpg", city: "Cumilla" },
        { id: "u009", name: "Shafiqul Islam", image: "https://randomuser.me/api/portraits/men/9.jpg", city: "Gazipur" },
        { id: "u010", name: "Nazrul M.", image: "https://randomuser.me/api/portraits/men/10.jpg", city: "Narayanganj" }
    ];


    const singledata= persons.find(person=> person.id== id);

    return (
        <div>
            <h1>Service Details</h1>
            <p>ID: {id}</p>
            <p>name: {singledata.name}</p>
            <img src={singledata.image} />

            
        </div>
    );
};

export default Page;
