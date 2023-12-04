import React, {useEffect, useState} from 'react';
import PageTitle from "../components/base/PageTitle";
import RangeSlider from "../components/base/DateRangeSlider";
import TextField from "../components/base/TextField";
import {getAllUsers} from "../services/users";
import {toast} from "react-toastify";
import RadioGroup from "../components/base/RadioGroup";
import {GENDER_OPTIONS_FILTER, TAG_PLACEHOLDER} from "../constants/createAccount";
import {TAGS_LIST} from "../constants/tags";
import SelectComponent from "../components/base/Select";
import {Button} from "@mui/material";
import {getTagsQueryString} from "../utils/getTagsQueryString";
import Pagination from "@mui/material/Pagination";
import {useGeolocated} from "react-geolocated";
import {DISTANCE_OPTIONS, DISTANCE_PLACEHOLDER} from "../constants/list";

const List = () => {
    const [users, setUsers] = useState([])
    const [ageRange, setAgeRange] = useState([18, 22])
    const [gender, setGender] = useState('')
    const [search, setSearch] = useState('')
    const [lon, setLon] = useState('')
    const [lat, setLat] = useState('')
    const [tags, setTags] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [distance, setDistance] = useState(DISTANCE_OPTIONS[0].key)

    useEffect(() => {
        if(!lon || !lat) return
        handleGetUsers()
    }, [page, lon, lat])

    const {coords} =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    useEffect(() => {
        setLon(coords?.longitude)
        setLat(coords?.latitude)
    }, [coords])

    const handleGetUsers = async () => {
        try {
            const params = {
                minAge: ageRange[0],
                maxAge: ageRange[1],
                tags: getTagsQueryString(tags),
                pageSize: 3,
                search,
                page,
                gender,
                lon: lon,
                lat: lat,
                maxDistance: distance
            }
            const {data} = await getAllUsers(params)
            const {users, totalPages} = data.data

            setUsers(users)
            setTotalPages(totalPages)
        } catch (e) {
            toast.error(e.message)
        }
    }

    const handleSubmit = () => {
        handleGetUsers()
    }

    const handleGetAgeRange = (data) => {
        setAgeRange(data)
    }

    const handleGenderChange = (value) => {
        setGender(value)
    }

    const handleSelectTags = (selectedOption) => {
        setTags(selectedOption)
    };

    const handleChangePagination = (_, data) => {
        setPage(data)
    }

    const handleSetSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSelectDistance = (selectedOption) => {
        setDistance(selectedOption.value)
    }

    return (
        <div>
            <PageTitle>List</PageTitle>
            <div className={"flex flex-wrap justify-between items-center"}>
                <div className={"w-2/5 mb-4"}>
                    <RangeSlider
                        onGetAgeRange={handleGetAgeRange}
                    />
                </div>
                <div className={"w-2/5 mb-4"}>
                    <RadioGroup
                        options={GENDER_OPTIONS_FILTER}
                        selectedOption={gender}
                        onChange={handleGenderChange}
                        className={"flex w-100 justify-around"}
                    />
                </div>
                <div className={"w-2/5 mb-4"}>
                    <SelectComponent
                        values={tags}
                        options={TAGS_LIST}
                        placeholder={TAG_PLACEHOLDER}
                        onSelect={handleSelectTags}
                    />
                </div>
                <div className={"w-2/5 mb-4"}>
                    <TextField
                        onChange={handleSetSearch}
                        placeholder={"Search..."}
                    />
                </div>
                <div className={"w-2/5 mb-4"}>
                    <SelectComponent
                        options={DISTANCE_OPTIONS}
                        defaultValue={DISTANCE_OPTIONS[0].label}
                        onSelect={handleSelectDistance}
                        placeholder={DISTANCE_PLACEHOLDER}
                        isMulti={false}
                    />
                </div>
            </div>
            <div className={"flex justify-end"}>
                <Button variant="contained" type={"button"} onClick={handleSubmit}>
                    Submit
                </Button>
            </div>

            {
                users?.map((item) => {
                    return <p><span>{item?.firstName}</span> <span>{item?.age}</span></p>
                })
            }
            {!!totalPages && <div className={"flex justify-center"}>
                <Pagination count={totalPages} page={page} onChange={handleChangePagination}/>
            </div>}

        </div>
    );
};

export default List;