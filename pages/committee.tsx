import Card from "../components/Card";

export default function Committee1() {
    return (
        <div className="flex flex-col justify-center items-center w-full py-8">
            <div className="w-full flex justify-center gap-4">
                <Card committeeName={"Chief Patron"} to={"/committee-details/chief_patron"} style={{ backgroundColor: "#8ae4ff" }}/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-[300px] lg:w-[600px] px-2 md:px-0 gap-4">
                    <Card committeeName={"Patrons"} to={"/committee-details/patrons"} classname="p4" style={{ backgroundColor: "#61ffc5" }}/>
                    <Card committeeName={"Conference Chairs"} to={"/committee-details/conference_chairs"} classname="p4" style={{ backgroundColor: "#ffedc2" }}/>
                    <Card committeeName={"Program Chairs"} to={"/committee-details/program_chairs"} classname="p4" style={{ backgroundColor: "#b8ffb0" }}/>
                    <Card committeeName={"Technical Program Chairs"} to={"/committee-details/technical_program_chairs"}classname="p4" style={{ backgroundColor: "#dfe5f0" }} />
                    <Card committeeName={"Finance Chairs"} to={"/committee-details/finance_chairs"}classname="p4" style={{ backgroundColor: "#8ae4ff" }} />
                    <Card committeeName={"Publication Chairs"} to={"/committee-details/publication_chairs"}classname="p4" style={{ backgroundColor: "#61ffc5" }} />
                    <Card committeeName={"Sponsorship Chairs"} to={"/committee-details/sponsorship_chairs"} classname="p4" style={{ backgroundColor: "#ffedc2" }}/>
                    <Card committeeName={"Publicity and Media Chairs"} to={"/committee-details/pm_chairs"} classname="p4" style={{ backgroundColor: "#b8ffb0" }}/>
                    <Card committeeName={"Organizing Committee"} to={"/committee-details/organizing_committee"} classname="p4" style={{ backgroundColor: "#dfe5f0" }}/>
                    <Card committeeName={"Advisory Committee"} to={"/committee-details/advisory_committee"} classname="p4" style={{ backgroundColor: "#8ae4ff" }}/>
                    <Card committeeName={"Website Chairs"} to={"/committee-details/website_chairs"} classname="p4" style={{ backgroundColor: "#61ffc5" }}/>
                    <Card committeeName={"Conference Convenors"} to={"/committee-details/conference_convenors"} /classname="p4" style={{ backgroundColor: "#ffedc2" }}>
                    <Card committeeName={"Session Management"} to={"/committee-details/session_management"} classname="p4" style={{ backgroundColor: "#b8ffb0" }}/>
                    <Card committeeName={"Hospitality"} to={"/committee-details/hospitality"} classname="p4" style={{ backgroundColor: "#dfe5f0" }}/>
                    <Card committeeName={"Transportation"} to={"/committee-details/transportation"} classname="p4" style={{ backgroundColor: "#8ae4ff" }}/>
                    <Card committeeName={"Registration Committee"} to={"/committee-details/registration_committee"} classname="p4" style={{ backgroundColor: "#61ffc5" }}/>
             
            </div>
        </div>
    );
}
