import React, {useEffect} from 'react';
import {useGeolocated} from "react-geolocated";
import TextField from "../base/TextField";
import {useField} from "formik";
import FormikErrorMessage from "../formik/FormikErrorMessage";
import {LATITUDE_LABEL, LONGITUDE_LABEL} from "../../constants/createAccount";

const LocationComponent = ({name}) => {
    const [{value}, meta, {setValue}] = useField({name});
    const isError = meta.error && meta.touched;

    const {coords} =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    useEffect(() => {
        setValue([coords?.longitude, coords?.latitude])
    }, [coords])

    const handleChangeLon = (e) => {
        const location = [...value]
        location[0] = e.target.value
        setValue(location)
    }

    const handleChangeLat = (e) => {
        const location = [...value]
        location[1] = e.target.value
        setValue(location)
    }

    return (
        <div>
            <div className={"flex"}>
                <TextField
                    value={value?.[0]}
                    label={LONGITUDE_LABEL}
                    disabled={true}
                    onChange={handleChangeLon}
                    containerClassNames={"mr-4"}
                />
                <TextField
                    value={value?.[1]}
                    label={LATITUDE_LABEL}
                    onChange={handleChangeLat}
                    disabled={true}
                />
            </div>
            {isError && <FormikErrorMessage message={meta.error}/>}
        </div>
    );
};

export default LocationComponent;