import * as types from "./actionTypes"
import FacilityService from "../../Services/FacilityService"

export function showLoading(actionType = undefined) {
    return function (dispatch, getState) {
        return dispatch({
            type: actionType
        })
    }
}

export function fetchfacilityDetails(facilityId) {
    return function (dispatch, getState) {
        showLoading(types.FACILITY_DETAILS_REQUESTED)
        FacilityService.getFacilityDetails(facilityId)
            .then(facilityDetails => {
                return dispatch({
                    type: types.FACILITY_DETAILS_RECEIVED,
                    facilityDetails: facilityDetails[0]
                })
            })
            .catch(error => {
                throw error
            })
    }
}

export function fetchCountryFacilityTypeSummary() {
    return function (dispatch, getState) {
        dispatch(showLoading(types.COUNTRY_FACILITYTYPES_SUMMARY_REQUESTED))
        return FacilityService.getCountryFacilityTypeSummary()
            .then(countryFacilityTypesSummary => {
                return dispatch({
                    type: types.COUNTRY_FACILITYTYPES_SUMMARY_RECEIVED,
                    countryFacilityTypesSummary: countryFacilityTypesSummary.data
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function fetchCountryKephLevelsSummary(){
    return function (dispatch, getState){
        dispatch(showLoading(types.COUNTRY_KEPHLEVELS_SUMMARY_REQUESTED))
        return FacilityService.getCountryKephLevelSummary()
            .then(countryKephLevelsSummary => {                                                
                return dispatch({
                    type: types.COUNTRY_KEPHLEVELS_SUMMARY_RECEIVED,
                    countryKephLevelsSummary: countryKephLevelsSummary.data
                })
            }).catch(error =>{
                throw(error)
            })
    }
}

export function fetchCountryBedsSummary(){
    return function (dispatch, getState){
        dispatch(showLoading(types.COUNTRY_BEDS_SUMMARY_REQUESTED))
        return FacilityService.getCountryBedsSummary()
            .then(countryBedsSummary => {                                                
                return dispatch({
                    type: types.COUNTRY_BEDS_SUMMARY_RECEIVED,
                    countryBedsSummary: countryBedsSummary
                })
            }).catch(error =>{
                throw(error)
            })
    }
}

export function fetchCountrySummary() {
    return function (dispatch, getState) {
        dispatch(showLoading(types.COUNTRY_SUMMARY_REQUESTED))
        return FacilityService.getCountrySummary()
            .then(countrySummary => {
                return dispatch({
                    type: types.COUNTRY_SUMMARY_RECEIVED,
                    countrySummary
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function fetchCountySummary(countyId) {
    return function (dispatch, getState) {
        dispatch(showLoading(types.COUNTY_SUMMARY_REQUESTED))
        return FacilityService.getCountySummary(countyId)
            .then(countySummary => {
                return dispatch({
                    type: types.COUNTY_SUMMARY_RECEIVED,
                    countySummary
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function fetchCountyFacilityTypeSummary(countyId) {
    return function (dispatch, getState) {
        dispatch(showLoading(types.COUNTY_FACILITYTYPES_SUMMARY_REQUESTED))
        return FacilityService.getCountyFacilityTypeSummary(countyId)
            .then(countyFacilityTypesSummary => {
                return dispatch({
                    type: types.COUNTY_FACILITYTYPES_SUMMARY_RECEIVED,
                    countyFacilityTypesSummary: countyFacilityTypesSummary.data 
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function fetchCountyKephLevelsSummary(countyId) {
    return function (dispatch, getState) {
        dispatch(showLoading(types.COUNTY_KEPHLEVELS_SUMMARY_REQUESTED))
        return FacilityService.getCountyKephLevelsSummary(countyId)
            .then(countyKephLevelsSummary => {
                return dispatch({
                    type: types.COUNTY_KEPHLEVELS_SUMMARY_RECEIVED,
                    countyKephLevelsSummary: countyKephLevelsSummary.data 
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function fetchConstituencySummary(constituencyId) {
    return function (dispatch, getState) {
        dispatch(showLoading(types.CONSTITUENCY_SUMMARY_REQUESTED))
        FacilityService.getConstituencySummary(constituencyId)
            .then(constituencySummary => {
                return dispatch({
                    type: types.CONSTITUENCY_SUMMARY_RECEIVED,
                    constituencySummary
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function fetchWardSummary(wardId) {
    return function (dispatch, getState) {
        dispatch(showLoading(types.WARD_SUMMARY_REQUESTED))
        FacilityService.getWardSummary(wardId)
            .then(wardSummary => {
                return dispatch({
                    type: types.WARD_SUMMARY_RECEIVED,
                    wardSummary
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function fetchFacilities(level, id) {
    return function (dispatch, getState) {
        dispatch(showLoading(types.FACILITY_LIST_REQUESTED))
        return FacilityService.getFacilities(level, id)
            .then(facilities => {
                dispatch({
                    type: types.FACILITY_LIST_RECEIVED,
                    facilities
                })
            })
            .catch(error => { })
    }
}

export function fetchFacilityTypes() {
    return function (dispatch, getState) {
        return FacilityService.getFacilityTypes()
            .then(facilityTypes => {
                return dispatch({
                    type: types.FACILITY_TYPES_RECEIVED,
                    facilityTypes
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function fetchFacilityKephLevels() {
    return function (dispatch, getState) {
        showLoading(types.FACILITY_KEPH_LEVELS_REQUESTED)
        return FacilityService.getFaciityKephLevels()
            .then(kephLevels => {
                return dispatch({
                    type: types.FACILITY_KEPH_LEVELS_RECEIVED,
                    kephLevels
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function changeFacilityInformationType(informationType) {
    return function (dispatch, getState) {
        return dispatch({
            type: types.CHANGE_FACILITY_INFORMATION_TYPE,
            informationType
        })
    }
}

export function changeFacilityFilter(filterItem) {
    return function (dispatch, getState) {
        dispatch({
            type: types.CHANGE_FACILITY_FILTER,
            filterItem: filterItem
        })
    }
}
