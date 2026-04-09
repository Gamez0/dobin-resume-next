import AboutMe from './containers/AboutMe';
import Banner from './containers/Banner';
import Experiences from './containers/Experiences';
import Skills from './containers/Skills';
import ProjectList from './containers/ProjectList';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <ProjectList />
        </div>
    );
}
