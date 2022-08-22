import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Table from 'react-tailwind-table';
// import 'react-tailwind-table/dist/index.css';

export default function Permission(props) {
    let columns = [{
        field: "checkbox",
        use: "#",
    },{
        field: "name",
        use: "Permission Name",
    }, {
        field: "action",
        use: "Actions"
    }];

    let tableStyle = {
        main: 'px-6 pt-1 pb-6', 
        top: { elements: { main: 'px-0 mt-0 mb-3', search: 'mt-0 pl-7 py-3' }, },
        // table_head: { table_row: '' },
        // table_body: { main: '' },
        footer: { main: 'border-0', page_numbers: 'border-0 w-8 h-8 flex items-center justify-center' },
    };

    let rows = [{
        id: 1,
        name: 'text-01'
    }, {
        id: 2,
        name: 'text-02'
    }, {
        id: 3,
        name: 'text-03'
    }, {
        id: 4,
        name: 'text-04'
    }, {
        id: 5,
        name: 'text-05'
    }, {
        id: 6,
        name: 'text-06'
    }, {
        id: 7,
        name: 'text-07'
    }, {
        id: 8,
        name: 'text-08'
    }, {
        id: 9,
        name: 'text-09'
    }, {
        id: 10,
        name: 'text-010'
    }, {
        id: 11,
        name: 'text-011'
    }, {
        id: 12,
        name: 'text-012'
    }, {
        id: 13,
        name: 'text-013'
    }];

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Permission</h2>
                    <div className='flex justify-between items-center'>
                        <a className='cursor-pointer px-2 py-1 rounded-md bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-500 text-white text-sm'>Add Permission</a>
                    </div>
                </div>
            }
        >
            <Head title="Permissions" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="bg-white border-b border-gray-200">
                            <Table styling={tableStyle} should_export={false} columns={columns} rows={rows} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
