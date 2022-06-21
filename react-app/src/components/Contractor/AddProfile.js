import './AddProfile.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as employeeActions from '../../store/employee';
import Moment from 'moment';
import '../View.css'

function AddProfile() {
    const [errors, setErrors] = useState([]);

    const [id, setId] = useState(useSelector(state => state.session.user.id));
    const [first_name, setFirstName] = useState(null);
    const [last_name, setLastName] = useState(null);
    const [alias, setAlias] = useState(null);
    const [role, setRole] = useState('contractor');
    const [country_code, setCountryCode] = useState(null);
    const [phone_number, setPhoneNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [linkedin_url, setLinkedInURL] = useState(null);
    const [availability, setAvailability] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [country, setCountry] = useState(null);
    const [zipcode, setZipcode] = useState(null);
    const [direct_report, setDirectReport] = useState(null);
    const [employment_start, setEmploymentStart] = useState(Moment().utc(false).format('MM-DD-YYYY'));
    const [employment_end, setEmploymentEnd] = useState(null);
    const [working_status, setWorkingStatus] = useState(null);
    const [recruiter_name, setRecruiterName] = useState(null);
    const [hourly_rate, setHourlyRate] = useState(null);
    const [rating, setRating] = useState(null);

    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const newEmployee = {
            id, first_name, last_name, alias, role, country_code, phone_number, email, linkedin_url, availability, address, city, state, country,
            zipcode, direct_report, employment_start, employment_end, working_status, recruiter_name, hourly_rate, rating
        }

        // Run request. // MODIFY FOR ROLES ROUTE
        const data = dispatch(employeeActions.addEmployee(newEmployee));

        // Close the modal and reset form state.
        setFirstName(null);
        setLastName(null);
        setAlias(null);
        setRole('contractor');
        setCountryCode(null);
        setPhoneNumber(null);
        setEmail(null);
        setLinkedInURL(null);
        setAvailability(null);
        setAddress(null);
        setCity(null);
        setState(null);
        setCountry(null);
        setZipcode(null);
        setDirectReport(null);
        setEmploymentStart(Moment().utc(false).format('MM-DD-YYYY'));
        setEmploymentEnd(null);
        setWorkingStatus(null);
        setRecruiterName(null);
        setHourlyRate(null);
        setRating(null);

        // Return request data.
        return data;
    }

    return (
        <div className="addProfile">
            <p className='addProfileLabel'>You have not created a profile yet. Create one:</p>
            <form onSubmit={handleSubmit} id='profileForm' className='profileForm'>
                <div className='formInput'>
                    <label htmlFor='first_name'></label>
                    <input 
                    className='input'
                    name='first_name'
                    type='text'
                    placeholder='First Name*'
                    value={first_name}
                    onChange={e => setFirstName(e.target.value)}
                    required
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='last_name'></label>
                    <input
                    className='input'
                    name='last_name'
                    type='text'
                    placeholder='Last Name*'
                    value={last_name}
                    onChange={e => setLastName(e.target.value)}
                    required
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='alias'></label>
                    <input
                    className='input'
                    name='alias'
                    type='text'
                    placeholder='Alias'
                    value={alias}
                    onChange={e => setAlias(e.target.value)}
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='country_code'></label>
                    <input
                    className='input'
                    name='country_code'
                    type='text'
                    placeholder='Country Code*'
                    value={country_code}
                    onChange={e => setCountryCode(e.target.value)}
                    required
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='phone_number'></label>
                    <input
                    className='input'
                    name='phone_number'
                    type='text'
                    placeholder='Phone Number*'
                    value={phone_number}
                    onChange={e => setPhoneNumber(e.target.value)}
                    required
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='email'></label>
                    <input
                    className='input'
                    name='email'
                    type='text'
                    placeholder='Email*'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='linkedin_url'></label>
                    <input
                    className='input'
                    name='linkedin_url'
                    type='text'
                    placeholder='LinkedIn'
                    value={linkedin_url}
                    onChange={e => setLinkedInURL(e.target.value)}
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='availability'></label>
                    <input
                    className='input'
                    name='availability'
                    type='text'
                    placeholder='Availability*'
                    value={availability}
                    onChange={e => setAvailability(e.target.value)}
                    required
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='address'></label>
                    <input
                    className='input'
                    name='address'
                    type='text'
                    placeholder='Address*'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='city'></label>
                    <input
                    className='input'
                    name='city'
                    type='text'
                    placeholder='City*'
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='state'></label>
                    <input
                    className='input'
                    name='state'
                    type='text'
                    placeholder='State/Province*'
                    value={state}
                    onChange={e => setState(e.target.value)}
                    required
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='country'></label>
                    <input
                    className='input'
                    name='country'
                    type='text'
                    placeholder='Country*'
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='zipcode'></label>
                    <input
                    className='input'
                    name='zipcode'
                    type='text'
                    placeholder='Zip*'
                    value={zipcode}
                    onChange={e => setZipcode(e.target.value)}
                    required
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='recruiter_name'></label>
                    <input
                    className='input'
                    name='recruiter_name'
                    type='text'
                    placeholder='Recruiter Name'
                    value={recruiter_name}
                    onChange={e => setRecruiterName(e.target.value)}
                    />
                </div>
                <div className='formInput'>
                    <label htmlFor='hourly_rate'></label>
                    <input
                    className='input'
                    name='hourly_rate'
                    type='text'
                    placeholder='Hourly Rate'
                    value={hourly_rate}
                    onChange={e => setHourlyRate(e.target.value)}
                    />
                </div>
                <button className='profileSubmitBtn' type='submit'>Save</button>
            
                <div className='customerErrors'>
                    {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default AddProfile;