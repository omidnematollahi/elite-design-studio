import personalPicture from '@/assets/images/personal-picture.jpeg';
import './profile.scss';
import Count from '../count/count';

export function Profile({ toggle }) {
  const counterInfo = [
    {
      label: 'Years of Experience',
      number: '8',
      duration: 8,
      extraCharacter: '+',
    },
    {
      label: 'Success Projects',
      number: '500',
      duration: 10,
      extraCharacter: '+',
    },
    {
      label: 'Happy Customers',
      number: '100',
      duration: 10,
      extraCharacter: '+',
    },
  ];
  return (
    <div className="profile">
      <div className="container">
        <div className={`profile__avatar ${toggle ? 'visible animate__animated animate__backInUp' : ''}`}>
          <img src={personalPicture} />
        </div>
        <div className={`profile__about  ${toggle ? 'visible animate__animated animate__backInUp' : ''}`}>
          {/* <div className="profile__title">
            <h2>About Elite Design Studio</h2>
          </div> */}
          <div className="profile__textContent">
            <h1>A PLACE WHERE IDEAS BECOME REALITY</h1>
            <p>
              Our mission is to provide exceptional design to create an elegant environment, improve
              functionality, and increase property value. We turn your vision into a stunning space reflecting
              your needs, desires, and personality tailored to your lifestyle and budget.
            </p>
            <div className="profile__statistics">
              {counterInfo.map((counter) => {
                return <Count data={counter} key={counter.label + ' ' + counter.number} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
