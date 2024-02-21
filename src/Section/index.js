
import "./style.css";

const Section = ({ body, equalitionResult}) => (
    <section>
        <div>
            {body}
            {equalitionResult}
        </div>
    </section>
);

export default Section;