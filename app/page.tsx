import AboutMe from './containers/AboutMe';
import Banner from './containers/Banner';
import Experiences from './containers/Experiences';
import ProjectList from './containers/ProjectList';
import SkillMatrix from './containers/SkillMatrix';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <SkillMatrix />
            <Experiences />
            <ProjectList />
        </div>
    );
}
