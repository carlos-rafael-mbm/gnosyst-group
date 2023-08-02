import { useEffect } from "react";
import { InitialComponent, SoftwareComponent, ProjectComponent, ServiceComponent, DetailComponent, ContactLinkComponent, QuestionListComponent } from "../components/home";

export const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0) // Hace scroll al inicio de la página cuando el componente se monta
    }, [])

    return (
        <>
            <InitialComponent />
            <SoftwareComponent />
            {/* <ProjectComponent /> */}
            <ServiceComponent />
            <DetailComponent />
            <ContactLinkComponent />
            <QuestionListComponent />
        </>
    )
}