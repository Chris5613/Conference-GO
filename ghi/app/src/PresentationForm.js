import React, { useEffect, useState } from 'react';


const PresentationForm = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [company_name,setCompany_name] = useState('')
    const [title,setTitle] = useState('')
    const [synopsis,setSynopsis] = useState('')
    const [conference, setConference] = useState([]);


    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
    }
    const handleCompanyChange = (event) => {
        const value = event.target.value;
        setCompany_name(value);
    }
    const handleTitleChange = (event) => {
        const value = event.target.value;
        setTitle(value);
    }
    const handleSynopsisChange = (event) => {
        const value = event.target.value;
        setSynopsis(value);
    }
    const handleConferenceChange = (event) => {
        const value = event.target.value;
        setConference(value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.email = email;
        data.name = name;
        data.company_name = company_name;
        data.conference = conference;
        data.title = title;
        data.synopsis = synopsis;

        console.log(data);

        const locationUrl = 'http://localhost:8000/api/conferences/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const newLocation = await response.json();
            console.log(newLocation);

            setName('');
            setEmail('');
            setCompany_name('');
            setTitle('');
            setSynopsis('');
            setConference('');
        }
    }

    const fetchData = async () => {
        const url = 'http://localhost:8000/api/conferences/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setConference(data.conference);
        }
    }

    useEffect(() => {
        fetchData();
}, []);

    return (
        <div class="container">
        <div class="row">
            <div class="offset-3 col-6">
                <div class="shadow p-4 mt-4">
            <h1>Create a new presentation</h1>
            <form onSubmit={handleSubmit} id="create-presentation-form">
            <div class="form-floating mb-3">
                <input onChange={handleNameChange} placeholder="Presenter name" required type="text" name="presenter_name" id="presenter_name" class="form-control"/>
                <label for="presenter_name">Presenter Name</label>
            </div>
            <div class="form-floating mb-3">
                <input onChange={handleEmailChange} placeholder="Prsenter Email" required type="email" name="presenter_email" id="presenter_email" class="form-control"/>
                <label for="presenter_email">Presenter Email</label>
            </div>
            <div class="form-floating mb-3">
                <input onChange={handleCompanyChange} placeholder="Company name"  type="text" name="company_name" id="company_name" class="form-control"/>
                <label for="company_name">Company name</label>
            </div>
            <div class="form-floating mb-3">
                <input onChange={handleTitleChange} placeholder="Title" required type="text"  name="Title" id="Title" class="form-control"/>
                <label for="Title">Title</label>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Synopsis</label>
                <textarea  onChange={handleSynopsisChange} required class="form-control" name="description"
                id="description" rows="4"></textarea>
            </div>
            <div class="mb-3">
                <select onChange={handleConferenceChange}required name="conference" id="conference" class="form-select">
                    <option selected value="">Choose a Conference</option>
                    {conference.map(state => {
                    return (
                        <option key={conference.id}>
                            {conference.name}
                        </option>
                    );
                })}
                </select>
            </div>
            <button class="btn btn-primary">Create</button>
            </form>
            <div class="alert alert-success d-none mb-0" id="success-message">
                Congratulations! You're all signed up!
            </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PresentationForm
