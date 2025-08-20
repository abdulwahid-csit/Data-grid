export const result = {
    "config": {
        "limit": 10,
        "page": 1,
        "totalPages": 5,
        "totalResults": 45,
        "no_of_records": 10,
        "type": "EmployeesListing",
        "actions": [
            "rejoin",
            "view",
            "edit",
            "archive",
            "unarchive"
        ],
        "columns": [
            {
                "_id": "68a452870d16dd98dfeda320",
                "field": "logo",
                "header": "Image",
                "type": "image",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": true,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda321",
                "field": "employee_id",
                "header": "Employee Id",
                "type": "string",
                "search": null,
                "is_search_able": true,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": true,
                "filterValue": null,
                "is_sortable": true,
                "column_data": [],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda322",
                "field": "full_name",
                "header": "Employee Name",
                "type": "string",
                "search": null,
                "is_search_able": true,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": true,
                "filterValue": null,
                "is_sortable": true,
                "column_data": [],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda323",
                "field": "email",
                "header": "Email",
                "type": "string",
                "search": null,
                "is_search_able": true,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": true,
                "filterValue": null,
                "is_sortable": true,
                "column_data": [],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda324",
                "field": "gender",
                "header": "Gender",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [
                    "Male",
                    "Female",
                    "Other"
                ],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda325",
                "field": "birth_date",
                "header": "Birthday",
                "type": "date",
                "search": null,
                "is_search_able": true,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": true,
                "column_data": [],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda326",
                "field": "phone",
                "header": "Mobile Number",
                "type": "string",
                "search": null,
                "is_search_able": true,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": true,
                "column_data": [],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda327",
                "field": "employee_type",
                "header": "Employee Type",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": true,
                "column_data": [
                    "Permanent",
                    "Contract",
                    "Director/Owner",
                    "Probation",
                    "Extended Probation",
                    "Internee",
                    "Trainer",
                    "On Call"
                ],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda328",
                "field": "shift.shift_name",
                "header": "Shift",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": [
                    {
                        "_id": "67b80c6c31f15b07c3d5f3f8",
                        "value": "Morining",
                        "__typename": "column_dropdown_value"
                    }
                ],
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda329",
                "field": "designation.designation_name",
                "header": "Job Title",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": true,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": [
                    {
                        "_id": "67b80c6c31f15b07c3d5f410",
                        "value": "DSM",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67b80c6c31f15b07c3d5f40c",
                        "value": "Manager",
                        "__typename": "column_dropdown_value"
                    }
                ],
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda32a",
                "field": "department",
                "header": "Department",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": true,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": [
                    {
                        "_id": "67b80c6c31f15b07c3d5f401",
                        "value": "HR",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67b80c6c31f15b07c3d5f3fd",
                        "value": "Management",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67b80c6c31f15b07c3d5f405",
                        "value": "Precurement",
                        "__typename": "column_dropdown_value"
                    }
                ],
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda32b",
                "field": "roles",
                "header": "Roles",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": true,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": [
                    {
                        "_id": "67b81ca0e8bc70c2dbe7a983",
                        "value": "ceo",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67b81ea4e8bc70c2dbec583e",
                        "value": "cto peer to peer",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bfe86c7251a4b072d5b66d",
                        "value": "for tariq",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67b8240de8bc70c2dbf16069",
                        "value": "only me",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bc1dabfe222d9cba39c28b",
                        "value": "zainab",
                        "__typename": "column_dropdown_value"
                    }
                ],
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda32c",
                "field": "employee_group.group_name",
                "header": "Attendance Policy",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": [
                    {
                        "_id": "67b80c4b31f15b07c3d5ebff",
                        "value": "Restricted",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "68666d78c5e47e72e294285f",
                        "value": "Restricted 2",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67fddd10704c4d84915f1652",
                        "value": "ristricted 1",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bef78fdc102dae5405c413",
                        "value": "test",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67e0ed70761ed9908eebb495",
                        "value": "test 3",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67b80c5531f15b07c3d5ec1a",
                        "value": "unrestricted",
                        "__typename": "column_dropdown_value"
                    }
                ],
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda32d",
                "field": "vehicle_type",
                "header": "Vehicle Manufacturer",
                "type": "string",
                "search": null,
                "is_search_able": true,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda32e",
                "field": "license_no",
                "header": "License Number",
                "type": "string",
                "search": null,
                "is_search_able": true,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda32f",
                "field": "salary_payment_method",
                "header": "Pay Method",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [
                    "Cash",
                    "Cheque",
                    "Direct Deposit",
                    "Bank"
                ],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda330",
                "field": "auth_pin",
                "header": "Pin Code",
                "type": "string",
                "search": null,
                "is_search_able": true,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda331",
                "field": "city.city_name",
                "header": "City",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": [
                    {
                        "_id": "67bdbb48f9e805b15e2cc3dd",
                        "value": "Abbas Pur",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdb0bef9e805b15e1f6bb3",
                        "value": "Abbeville",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda7b4f9e805b15e133640",
                        "value": "Abdul Ghafoor Lehri",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdb8e8f9e805b15e29cdbf",
                        "value": "Abernant",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda789f9e805b15e12fd62",
                        "value": "Adak",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdabb0f9e805b15e188b91",
                        "value": "Adamsville",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdaab4f9e805b15e175a35",
                        "value": "Ahsan Pur",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdb1d7f9e805b15e20e592",
                        "value": "Akiachak",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdafaaf9e805b15e1dd920",
                        "value": "Akiak",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda290f9e805b15e0c4068",
                        "value": "Apache Junction",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdbca9f9e805b15e2eab8a",
                        "value": "Avon",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "66ab799cc980499d2fb4def2",
                        "value": "Eudora",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdbb48f9e805b15e2cc3e5",
                        "value": "Golra",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "667579b24d5909515a99d5ac",
                        "value": "Islamabad",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdb49cf9e805b15e246246",
                        "value": "Islamabad F-7 Markaz",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdb7fdf9e805b15e28a847",
                        "value": "Islamabad Gpo",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "66ab78f0c980499d2fb2d58f",
                        "value": "Newark",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdad3cf9e805b15e1a9702",
                        "value": "Newkirk",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "6639f2eb4f1241903c8e9509",
                        "value": "Pago Pago",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdbb48f9e805b15e2cc38f",
                        "value": "Rawalpindi Gulzar-E-Quaid",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda343f9e805b15e0d51aa",
                        "value": "Richmond",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda221f9e805b15e0bab2a",
                        "value": "Schenectady",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdb7fdf9e805b15e28a849",
                        "value": "Sohan",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda218f9e805b15e0b994a",
                        "value": "Timargara",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bdb49cf9e805b15e2461a1",
                        "value": "Ziarat (Dir)",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda59df9e805b15e1087a1",
                        "value": "Суховоля",
                        "__typename": "column_dropdown_value"
                    }
                ],
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda332",
                "field": "Country.name",
                "header": "Country",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": [
                    {
                        "_id": "5f7c18a74a915e54c6a0be88",
                        "value": "Pakistan",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "5f7c6f729373a40c5da6bfa5",
                        "value": "Ukraine",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "5ea181f0385937413f7a8d75",
                        "value": "United States",
                        "__typename": "column_dropdown_value"
                    }
                ],
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda333",
                "field": "state.state_name",
                "header": "state",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": [
                    {
                        "_id": "67bda290f9e805b15e0c3ffc",
                        "value": "Alabama",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda290f9e805b15e0c3fe3",
                        "value": "Alaska",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "6639f2eb4f1241903c8e9506",
                        "value": "American Samoa",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda290f9e805b15e0c4053",
                        "value": "Arizona",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda218f9e805b15e0b99cc",
                        "value": "Azad Jammu and Kashmir",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda218f9e805b15e0b993e",
                        "value": "Balochistan",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda291f9e805b15e0c413d",
                        "value": "Connecticut",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "6639e9af4f1241903c8ad45e",
                        "value": "Delaware",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda381f9e805b15e0daa00",
                        "value": "Federal Capital",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "5fc52de7c129f7160a7ebe65",
                        "value": "Islamabad Capital Territory",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda218f9e805b15e0b9949",
                        "value": "Khyber Pakhtunkhwa",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "6639eeef4f1241903c8d1a98",
                        "value": "Missouri",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda221f9e805b15e0baa9e",
                        "value": "New Mexico",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda221f9e805b15e0baac7",
                        "value": "New York",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda218f9e805b15e0b9960",
                        "value": "Punjab",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda223f9e805b15e0badd2",
                        "value": "Virginia",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67bda296f9e805b15e0c477d",
                        "value": "Zhytomyrska",
                        "__typename": "column_dropdown_value"
                    }
                ],
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda334",
                "field": "account_status",
                "header": "Account Status",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": true,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [
                    "active",
                    "Inactive",
                    "Termination",
                    "Resignation",
                    "Retirement",
                    "Blocked",
                    "Separated"
                ],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda335",
                "field": "joining_date",
                "header": "Joining Date",
                "type": "date",
                "search": null,
                "is_search_able": true,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": true,
                "column_data": [],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda336",
                "field": "salary_type",
                "header": "Salary Type",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [
                    "Salary",
                    "Hourly"
                ],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda337",
                "field": "new_salary_effect_from",
                "header": "Effective From",
                "type": "date",
                "search": null,
                "is_search_able": true,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": true,
                "column_data": [],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda338",
                "field": "total_week_hours",
                "header": "Week hour limit",
                "type": "number",
                "search": null,
                "is_search_able": true,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": true,
                "column_data": [],
                "column_dropdown_value": null,
                "__typename": "listingColumnsType"
            },
            {
                "_id": "68a452870d16dd98dfeda339",
                "field": "pay_schedule.pay_period",
                "header": "Pay Schedule",
                "type": "dropdown",
                "search": null,
                "is_search_able": false,
                "query": {
                    "first_condition": null,
                    "second_condition": null,
                    "first_value": null,
                    "second_value": null,
                    "condition": null,
                    "__typename": "queryType"
                },
                "is_visible": false,
                "filterValue": null,
                "is_sortable": false,
                "column_data": [],
                "column_dropdown_value": [
                    {
                        "_id": "67b80c6c31f15b07c3d5f416",
                        "value": "BiWeekly",
                        "__typename": "column_dropdown_value"
                    },
                    {
                        "_id": "67b80c6c31f15b07c3d5f41a",
                        "value": "Monthly",
                        "__typename": "column_dropdown_value"
                    }
                ],
                "__typename": "listingColumnsType"
            }
        ],
        "filters": [],
        "__typename": "dataTableConfig"
    },
    "results": [
        {
            "rocket_chat_id": "129133968699",
            "action_create_date": "2025-03-11T09:19:32.543Z",
            "total_week_hours": 0,
            "employee_action_date": null,
            "final_settlement_completed": true,
            "pay_schedule": null,
            "state": {
                "_id": "67bda381f9e805b15e0daa00",
                "state_name": "Federal Capital",
                "__typename": "State"
            },
            "Country": {
                "_id": "5f7c18a74a915e54c6a0be88",
                "name": "Pakistan",
                "__typename": "Country"
            },
            "city": {
                "_id": "67bdb49cf9e805b15e246246",
                "city_name": "Islamabad F-7 Markaz",
                "__typename": "City"
            },
            "id": "67d000241d19306eb456bfae",
            "logo": null,
            "is_deleted": false,
            "user_keeping_unit": "US#0008",
            "employee_id": "2233",
            "full_name": "Amir Khan",
            "isOwner": false,
            "email": "amir@gmail.com",
            "gender": "Male",
            "birth_date": "1973-02-07T19:00:00.000Z",
            "phone": "+923225544332",
            "employee_type": "Permanent",
            "vehicle_type": null,
            "pay_type": null,
            "license_no": "",
            "profile_pictures": [],
            "salary_payment_method": null,
            "shift": {
                "_id": "67b80c6c31f15b07c3d5f3f8",
                "shift_name": "Morining",
                "__typename": "Shift"
            },
            "designation": {
                "_id": "67b80c6c31f15b07c3d5f40c",
                "designation_name": "Manager",
                "__typename": "Designation"
            },
            "department": [],
            "roles": [],
            "employee_group": {
                "_id": "67b80c5531f15b07c3d5ec1a",
                "group_name": "unrestricted",
                "pay_type": null,
                "__typename": "attandencePolicy"
            },
            "auth_pin": "443322",
            "new_salary_effect_from": null,
            "account_status": "Final Settlement",
            "joining_date": "2025-01-31T19:00:00.000Z",
            "salary_type": null,
            "__typename": "User"
        },
        {
            "rocket_chat_id": "945493664753",
            "action_create_date": "2025-03-12T06:37:53.095Z",
            "total_week_hours": 0,
            "employee_action_date": null,
            "final_settlement_completed": false,
            "pay_schedule": null,
            "state": {
                "_id": "67bda290f9e805b15e0c3ffc",
                "state_name": "Alabama",
                "__typename": "State"
            },
            "Country": {
                "_id": "5ea181f0385937413f7a8d75",
                "name": "United States",
                "__typename": "Country"
            },
            "city": {
                "_id": "67bdb8e8f9e805b15e29cdbf",
                "city_name": "Abernant",
                "__typename": "City"
            },
            "id": "67d12bc1c4dde6a96a2d7ea8",
            "logo": null,
            "is_deleted": false,
            "user_keeping_unit": "US#0009",
            "employee_id": "",
            "full_name": "iusayf askdfj",
            "isOwner": false,
            "email": "tead@mail.com",
            "gender": "Male",
            "birth_date": "2010-03-12T06:37:08.356Z",
            "phone": "+923425446611",
            "employee_type": null,
            "vehicle_type": null,
            "pay_type": null,
            "license_no": "",
            "profile_pictures": [],
            "salary_payment_method": null,
            "shift": null,
            "designation": null,
            "department": [],
            "roles": [],
            "employee_group": null,
            "auth_pin": "134165",
            "new_salary_effect_from": null,
            "account_status": "inactive",
            "joining_date": null,
            "salary_type": null,
            "__typename": "User"
        },
        {
            "rocket_chat_id": "771322141871",
            "action_create_date": "2025-02-21T06:53:35.487Z",
            "total_week_hours": 30,
            "employee_action_date": "2025-01-14T19:00:00.000Z",
            "final_settlement_completed": false,
            "pay_schedule": {
                "pay_period": "Monthly",
                "__typename": "PayrollSchedule"
            },
            "state": {
                "_id": "6639f2eb4f1241903c8e9506",
                "state_name": "American Samoa",
                "__typename": "State"
            },
            "Country": {
                "_id": "5ea181f0385937413f7a8d75",
                "name": "United States",
                "__typename": "Country"
            },
            "city": {
                "_id": "6639f2eb4f1241903c8e9509",
                "city_name": "Pago Pago",
                "__typename": "City"
            },
            "id": "67b822efe8bc70c2dbf100c9",
            "logo": null,
            "is_deleted": false,
            "user_keeping_unit": "US#0004",
            "employee_id": "09090909",
            "full_name": "Zainab Bibi",
            "isOwner": false,
            "email": "zainab21feb@mail.com",
            "gender": "Female",
            "birth_date": "2010-02-10T06:52:52.000Z",
            "phone": "+923209819252",
            "employee_type": "Permanent",
            "vehicle_type": null,
            "pay_type": null,
            "license_no": "",
            "profile_pictures": [],
            "salary_payment_method": null,
            "shift": null,
            "designation": null,
            "department": [],
            "roles": [
                {
                    "_id": "67bc1dabfe222d9cba39c28b",
                    "roleName": "zainab",
                    "__typename": "Role"
                }
            ],
            "employee_group": {
                "_id": "67b80c4b31f15b07c3d5ebff",
                "group_name": "Restricted",
                "pay_type": null,
                "__typename": "attandencePolicy"
            },
            "auth_pin": "909091",
            "new_salary_effect_from": "2025-01-14T19:00:00.000Z",
            "account_status": "active",
            "joining_date": "2025-01-14T19:00:00.000Z",
            "salary_type": "Hourly",
            "__typename": "User"
        },
        {
            "rocket_chat_id": "793633555877",
            "action_create_date": "2025-03-11T08:46:11.289Z",
            "total_week_hours": 0,
            "employee_action_date": null,
            "final_settlement_completed": false,
            "pay_schedule": null,
            "state": {
                "_id": "67bda218f9e805b15e0b9960",
                "state_name": "Punjab",
                "__typename": "State"
            },
            "Country": {
                "_id": "5f7c18a74a915e54c6a0be88",
                "name": "Pakistan",
                "__typename": "Country"
            },
            "city": {
                "_id": "67bdbb48f9e805b15e2cc38f",
                "city_name": "Rawalpindi Gulzar-E-Quaid",
                "__typename": "City"
            },
            "id": "67cff85381e437088d94d4e9",
            "logo": null,
            "is_deleted": false,
            "user_keeping_unit": "US#0007",
            "employee_id": "1122",
            "full_name": "Salman Khan",
            "isOwner": false,
            "email": "salman@gmail.com",
            "gender": "Male",
            "birth_date": "1985-08-20T19:00:00.000Z",
            "phone": "+923175554332",
            "employee_type": "Permanent",
            "vehicle_type": null,
            "pay_type": null,
            "license_no": "",
            "profile_pictures": [],
            "salary_payment_method": null,
            "shift": {
                "_id": "67b80c6c31f15b07c3d5f3f8",
                "shift_name": "Morining",
                "__typename": "Shift"
            },
            "designation": {
                "_id": "67b80c6c31f15b07c3d5f410",
                "designation_name": "DSM",
                "__typename": "Designation"
            },
            "department": [],
            "roles": [
                {
                    "_id": "67b8240de8bc70c2dbf16069",
                    "roleName": "only me",
                    "__typename": "Role"
                }
            ],
            "employee_group": {
                "_id": "67b80c4b31f15b07c3d5ebff",
                "group_name": "Restricted",
                "pay_type": null,
                "__typename": "attandencePolicy"
            },
            "auth_pin": "123098",
            "new_salary_effect_from": null,
            "account_status": "Separated",
            "joining_date": "2024-12-31T19:00:00.000Z",
            "salary_type": null,
            "__typename": "User"
        },
        {
            "rocket_chat_id": "253822639119",
            "action_create_date": "2025-02-24T11:12:52.930Z",
            "total_week_hours": null,
            "employee_action_date": "2025-02-03T11:01:17.000Z",
            "final_settlement_completed": true,
            "pay_schedule": {
                "pay_period": "Monthly",
                "__typename": "PayrollSchedule"
            },
            "state": {
                "_id": "6639eeef4f1241903c8d1a98",
                "state_name": "Missouri",
                "__typename": "State"
            },
            "Country": {
                "_id": "5ea181f0385937413f7a8d75",
                "name": "United States",
                "__typename": "Country"
            },
            "city": {
                "_id": "66ab799cc980499d2fb4def2",
                "city_name": "Eudora",
                "__typename": "City"
            },
            "id": "67bc543467a6c6cd77727240",
            "logo": null,
            "is_deleted": false,
            "user_keeping_unit": "US#0005",
            "employee_id": "",
            "full_name": "azher abbas",
            "isOwner": false,
            "email": "azher21feb@mail.com",
            "gender": "Male",
            "birth_date": "2010-02-24T11:10:36.926Z",
            "phone": "+923648237234",
            "employee_type": "Director/Owner",
            "vehicle_type": null,
            "pay_type": null,
            "license_no": "",
            "profile_pictures": [],
            "salary_payment_method": "Cheque",
            "shift": null,
            "designation": null,
            "department": [],
            "roles": [],
            "employee_group": {
                "_id": "67b80c4b31f15b07c3d5ebff",
                "group_name": "Restricted",
                "pay_type": null,
                "__typename": "attandencePolicy"
            },
            "auth_pin": "434534",
            "new_salary_effect_from": "2025-02-02T19:00:00.000Z",
            "account_status": "Final Settlement",
            "joining_date": "2025-02-03T11:01:17.000Z",
            "salary_type": "Hourly",
            "__typename": "User"
        },
        {
            "rocket_chat_id": "839974884374",
            "action_create_date": "2025-02-21T06:48:27.956Z",
            "total_week_hours": null,
            "employee_action_date": "2024-12-31T19:00:00.000Z",
            "final_settlement_completed": false,
            "pay_schedule": {
                "pay_period": "Monthly",
                "__typename": "PayrollSchedule"
            },
            "state": {
                "_id": "67bda290f9e805b15e0c4053",
                "state_name": "Arizona",
                "__typename": "State"
            },
            "Country": {
                "_id": "5ea181f0385937413f7a8d75",
                "name": "United States",
                "__typename": "Country"
            },
            "city": {
                "_id": "67bda290f9e805b15e0c4068",
                "city_name": "Apache Junction",
                "__typename": "City"
            },
            "id": "67b821bbe8bc70c2dbefdb4d",
            "logo": null,
            "is_deleted": false,
            "user_keeping_unit": "US#0003",
            "employee_id": "09090901",
            "full_name": "Noor Ul Huda",
            "isOwner": false,
            "email": "noor21feb@mail.com",
            "gender": "Female",
            "birth_date": "2010-01-31T19:00:00.000Z",
            "phone": "+923209819252",
            "employee_type": "Permanent",
            "vehicle_type": null,
            "pay_type": null,
            "license_no": "",
            "profile_pictures": [],
            "salary_payment_method": null,
            "shift": null,
            "designation": null,
            "department": [],
            "roles": [
                {
                    "_id": "67b81ea4e8bc70c2dbec583e",
                    "roleName": "cto peer to peer",
                    "__typename": "Role"
                },
                {
                    "_id": "67b81ca0e8bc70c2dbe7a983",
                    "roleName": "ceo",
                    "__typename": "Role"
                },
                {
                    "_id": "67bfe86c7251a4b072d5b66d",
                    "roleName": "for tariq",
                    "__typename": "Role"
                }
            ],
            "employee_group": {
                "_id": "67b80c4b31f15b07c3d5ebff",
                "group_name": "Restricted",
                "pay_type": null,
                "__typename": "attandencePolicy"
            },
            "auth_pin": "453243",
            "new_salary_effect_from": "2024-12-31T19:00:00.000Z",
            "account_status": "active",
            "joining_date": "2024-12-31T19:00:00.000Z",
            "salary_type": "Hourly",
            "__typename": "User"
        },
        {
            "rocket_chat_id": "172333423781",
            "action_create_date": "2025-02-21T05:13:08.599Z",
            "total_week_hours": 100,
            "employee_action_date": "2025-02-01T05:11:04.000Z",
            "final_settlement_completed": false,
            "pay_schedule": {
                "pay_period": "Monthly",
                "__typename": "PayrollSchedule"
            },
            "state": {
                "_id": "6639e9af4f1241903c8ad45e",
                "state_name": "Delaware",
                "__typename": "State"
            },
            "Country": {
                "_id": "5ea181f0385937413f7a8d75",
                "name": "United States",
                "__typename": "Country"
            },
            "city": {
                "_id": "66ab78f0c980499d2fb2d58f",
                "city_name": "Newark",
                "__typename": "City"
            },
            "id": "67b80b6431f15b07c3d5b87c",
            "logo": "https://techbar.s3.amazonaws.com/public/employee/logo/67b80b6431f15b07c3d5b87c/sizes/36/1740393781323_.png",
            "is_deleted": false,
            "user_keeping_unit": "US#0001",
            "employee_id": "09090902",
            "full_name": "Tariq khan",
            "isOwner": false,
            "email": "tariq@feb.com",
            "gender": "Male",
            "birth_date": "2010-02-21T05:12:35.845Z",
            "phone": "+1201-782-3872",
            "employee_type": "Permanent",
            "vehicle_type": null,
            "pay_type": null,
            "license_no": "",
            "profile_pictures": [
                {
                    "dimension": 36,
                    "path": "https://techbar.s3.amazonaws.com/public/employee/logo/67b80b6431f15b07c3d5b87c/sizes/36/1740393781323_.png",
                    "__typename": "profilePictures"
                },
                {
                    "dimension": 50,
                    "path": "https://techbar.s3.amazonaws.com/public/employee/logo/67b80b6431f15b07c3d5b87c/sizes/50/1740393781323_.png",
                    "__typename": "profilePictures"
                },
                {
                    "dimension": 110,
                    "path": "https://techbar.s3.amazonaws.com/public/employee/logo/67b80b6431f15b07c3d5b87c/sizes/110/1740393781323_.png",
                    "__typename": "profilePictures"
                },
                {
                    "dimension": 128,
                    "path": "https://techbar.s3.amazonaws.com/public/employee/logo/67b80b6431f15b07c3d5b87c/sizes/128/1740393781323_.png",
                    "__typename": "profilePictures"
                },
                {
                    "dimension": 170,
                    "path": "https://techbar.s3.amazonaws.com/public/employee/logo/67b80b6431f15b07c3d5b87c/sizes/170/1740393781323_.png",
                    "__typename": "profilePictures"
                },
                {
                    "dimension": 500,
                    "path": "https://techbar.s3.amazonaws.com/public/employee/logo/67b80b6431f15b07c3d5b87c/sizes/500/1740393781323_.jpg",
                    "__typename": "profilePictures"
                }
            ],
            "salary_payment_method": "Bank",
            "shift": {
                "_id": "67b80c6c31f15b07c3d5f3f8",
                "shift_name": "Morining",
                "__typename": "Shift"
            },
            "designation": {
                "_id": "67b80c6c31f15b07c3d5f40c",
                "designation_name": "Manager",
                "__typename": "Designation"
            },
            "department": [
                {
                    "_id": "67b80c6c31f15b07c3d5f3fd",
                    "department_name": "Management",
                    "__typename": "Department"
                },
                {
                    "_id": "67b80c6c31f15b07c3d5f401",
                    "department_name": "HR",
                    "__typename": "Department"
                }
            ],
            "roles": [
                {
                    "_id": "67b81ea4e8bc70c2dbec583e",
                    "roleName": "cto peer to peer",
                    "__typename": "Role"
                }
            ],
            "employee_group": {
                "_id": "67fddd10704c4d84915f1652",
                "group_name": "ristricted 1",
                "pay_type": {
                    "_id": "67b80c6c31f15b07c3d5f41a",
                    "schedule_name": null,
                    "__typename": "PayrollSchedule"
                },
                "__typename": "attandencePolicy"
            },
            "auth_pin": "123456",
            "new_salary_effect_from": "2025-01-31T19:00:00.000Z",
            "account_status": "active",
            "joining_date": "2025-05-06T11:11:41.388Z",
            "salary_type": "Hourly",
            "__typename": "User"
        },
        {
            "rocket_chat_id": "942567825981",
            "action_create_date": "2025-05-01T05:43:00.733Z",
            "total_week_hours": 40,
            "employee_action_date": "2025-04-30T19:00:00.000Z",
            "final_settlement_completed": false,
            "pay_schedule": {
                "pay_period": "Monthly",
                "__typename": "PayrollSchedule"
            },
            "state": {
                "_id": "5fc52de7c129f7160a7ebe65",
                "state_name": "Islamabad Capital Territory",
                "__typename": "State"
            },
            "Country": {
                "_id": "5f7c18a74a915e54c6a0be88",
                "name": "Pakistan",
                "__typename": "Country"
            },
            "city": {
                "_id": "667579b24d5909515a99d5ac",
                "city_name": "Islamabad",
                "__typename": "City"
            },
            "id": "67b806a131f15b07c3d25139",
            "logo": null,
            "is_deleted": false,
            "user_keeping_unit": "",
            "employee_id": null,
            "full_name": "21 feb",
            "isOwner": true,
            "email": "21feb@mail.com",
            "gender": null,
            "birth_date": "2010-03-12T07:11:16.556Z",
            "phone": "+92 312 2222222",
            "employee_type": "Permanent",
            "vehicle_type": null,
            "pay_type": null,
            "license_no": null,
            "profile_pictures": [],
            "salary_payment_method": null,
            "shift": null,
            "designation": {
                "_id": "67b80c6c31f15b07c3d5f410",
                "designation_name": "DSM",
                "__typename": "Designation"
            },
            "department": [],
            "roles": [],
            "employee_group": {
                "_id": "67b80c5531f15b07c3d5ec1a",
                "group_name": "unrestricted",
                "pay_type": null,
                "__typename": "attandencePolicy"
            },
            "auth_pin": "111111",
            "new_salary_effect_from": "2023-12-31T19:00:00.000Z",
            "account_status": "active",
            "joining_date": "2023-12-31T19:00:00.000Z",
            "salary_type": "Salary",
            "__typename": "User"
        },
        {
            "rocket_chat_id": "151764776737",
            "action_create_date": "2025-02-21T06:37:53.240Z",
            "total_week_hours": 3,
            "employee_action_date": "2025-03-19T19:00:00.000Z",
            "final_settlement_completed": false,
            "pay_schedule": {
                "pay_period": "Monthly",
                "__typename": "PayrollSchedule"
            },
            "state": {
                "_id": "67bda218f9e805b15e0b993e",
                "state_name": "Balochistan",
                "__typename": "State"
            },
            "Country": {
                "_id": "5f7c18a74a915e54c6a0be88",
                "name": "Pakistan",
                "__typename": "Country"
            },
            "city": {
                "_id": "67bda7b4f9e805b15e133640",
                "city_name": "Abdul Ghafoor Lehri",
                "__typename": "City"
            },
            "id": "67b81f41e8bc70c2dbedbf5f",
            "logo": null,
            "is_deleted": false,
            "user_keeping_unit": "US#0002",
            "employee_id": "",
            "full_name": "Bilal Sadiq",
            "isOwner": false,
            "email": "bilal21feb@mail.com",
            "gender": "Male",
            "birth_date": "2010-02-21T06:37:10.213Z",
            "phone": "+923209819252",
            "employee_type": "Permanent",
            "vehicle_type": null,
            "pay_type": null,
            "license_no": "",
            "profile_pictures": [],
            "salary_payment_method": null,
            "shift": null,
            "designation": null,
            "department": [],
            "roles": [
                {
                    "_id": "67b81ca0e8bc70c2dbe7a983",
                    "roleName": "ceo",
                    "__typename": "Role"
                },
                {
                    "_id": "67bfe86c7251a4b072d5b66d",
                    "roleName": "for tariq",
                    "__typename": "Role"
                },
                {
                    "_id": "67b81ea4e8bc70c2dbec583e",
                    "roleName": "cto peer to peer",
                    "__typename": "Role"
                }
            ],
            "employee_group": {
                "_id": "67b80c5531f15b07c3d5ec1a",
                "group_name": "unrestricted",
                "pay_type": null,
                "__typename": "attandencePolicy"
            },
            "auth_pin": "909090",
            "new_salary_effect_from": "2024-12-31T19:00:00.000Z",
            "account_status": "active",
            "joining_date": "2025-02-27T05:27:20.451Z",
            "salary_type": "Hourly",
            "__typename": "User"
        },
        {
            "rocket_chat_id": "541538834662",
            "action_create_date": "2025-03-05T16:32:32.192Z",
            "total_week_hours": null,
            "employee_action_date": "2025-03-01T06:11:27.000Z",
            "final_settlement_completed": false,
            "pay_schedule": {
                "pay_period": "Monthly",
                "__typename": "PayrollSchedule"
            },
            "state": {
                "_id": "67bda291f9e805b15e0c413d",
                "state_name": "Connecticut",
                "__typename": "State"
            },
            "Country": {
                "_id": "5ea181f0385937413f7a8d75",
                "name": "United States",
                "__typename": "Country"
            },
            "city": {
                "_id": "67bdbca9f9e805b15e2eab8a",
                "city_name": "Avon",
                "__typename": "City"
            },
            "id": "67c87ca0cadb721c5532299e",
            "logo": null,
            "is_deleted": false,
            "user_keeping_unit": "US#0006",
            "employee_id": "",
            "full_name": "asif ali",
            "isOwner": false,
            "email": "asiif@mail.com",
            "gender": "Female",
            "birth_date": "2010-03-05T16:31:46.736Z",
            "phone": "+1201-782-3783",
            "employee_type": "Permanent",
            "vehicle_type": null,
            "pay_type": null,
            "license_no": "",
            "profile_pictures": [],
            "salary_payment_method": null,
            "shift": null,
            "designation": null,
            "department": [],
            "roles": [],
            "employee_group": {
                "_id": "67b80c4b31f15b07c3d5ebff",
                "group_name": "Restricted",
                "pay_type": null,
                "__typename": "attandencePolicy"
            },
            "auth_pin": "767363",
            "new_salary_effect_from": "2025-02-28T19:00:00.000Z",
            "account_status": "Separated",
            "joining_date": "2025-03-01T06:11:27.000Z",
            "salary_type": "Hourly",
            "__typename": "User"
        }
    ],
    "__typename": "employeeListingResultNew"
}