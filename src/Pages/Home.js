import avatar from '../images/avatar.jpg';

function Home() {
  return (
    <section>
      <img src={avatar} alt="Avatar" />
      <h1>Full Name</h1>
      <h2>Web Developer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non purus a nisl aliquam maximus. Fusce imperdiet
        justo et sapien finibus commodo. Nam in augue purus. In nec consectetur libero. Suspendisse potenti. Quisque
        pulvinar mauris sit amet mauris laoreet elementum.
      </p>
    </section>
  );
}

export default Home;
