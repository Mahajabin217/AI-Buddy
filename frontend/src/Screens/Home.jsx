import React, { useContext, useState } from 'react';
import { UserContext } from '../context/User.context.jsx';
import axios from '../config/axios.js';

const Home = () => {
    const { user } = useContext(UserContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState('');


    function createProject(e) {
        e.preventDefault(); // ✅ Prevent page reload
        // console.log('create project');
        console.log({ projectName });

        axios.post('/projects/create', {
            name: projectName,
        })
            .then((res) => {
                console.log(res);
                setIsModalOpen(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        // <div>
        //     {JSON.stringify(user)}
        // </div>
        <main className='p-4'>
            <div className="projects">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="project p-4 border border-slate-300 rounded-md">
                    New Project
                    <i className="ri-link ml-2"></i>
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-md w-1/3">
                        <h2 className="text-xl mb-4">Create New Project</h2>
                        <form onSubmit={createProject}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Project Name</label>
                                <input
                                    onChange={(e) => setProjectName(e.target.value)}
                                    value={projectName}
                                    type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="mr-2 px-4 py-2 bg-gray-300 rounded-md" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>

    );
};

export default Home;