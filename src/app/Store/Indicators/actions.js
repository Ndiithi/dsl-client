import * as types from "./actionTypes"
import IndicatorService from "../../Services/IndicatorService"

export function showLoading(actionType) {
    return function (dispatch, getState) {
        return dispatch({
            type: actionType
        })
    }
}

export function fetchIndicatorGroups() {
    return function (dispatch, getState) {
        dispatch(showLoading(types.INDICATORGROUP_REQUESTED))
        return IndicatorService.getIndicatorGroups()
            .then(indicatorGroups => {
                return dispatch({
                    type: types.INDICATORGROUP_RECEIVED,
                    indicatorGroups
                })
            })
            .catch(error => {
                throw(error)
             })
    }
}

export function fetchIndicatorGroupIndicators(indicatorGroupId){
    return function(dispatch, getState){
        dispatch(showLoading(types.INDICATORGROUP_INDICATORS_REQUESTED))
        return IndicatorService.getIndicatorGroupIndicators(indicatorGroupId)
            .then(indicatorGroupIndicators =>{                
                return dispatch({
                    type: types.INDICATORGROUP_INDICATORS_RECEIVED,
                    indicatorGroupIndicators
                })
            }).catch(error => {
                throw(error)
            })
    }
}

export function addFacilityIndicator(indicatorId){
    return function(dispatch, getState){
        return dispatch({
            type: types.ADD_FACILITY_INDICATOR_REQUESTED,
            indicatorId
        })
    }
}

export function setFacilityPeriodType(periodTypeId){
    return function(dispatch , getState){
        return dispatch({
            type : types.SET_FACILITY_PERIOD_TYPE_REQUESTED,
            periodTypeId
        })
    }
}

export function setFacilityYear(year){
    return function(dispatch, getState){
        return dispatch({
            type: types.SET_FACILITY_YEAR_REQUESTED,
            year
        })
    }
}

export function fetchFacilityIndicatorValues(facilityId, indicators, periodTypeId, year){
    return function(dispatch, getState){
        dispatch({type: types.GET_FACILITY_INDICATORS_VALUES_START})

        let filters ={
            facilityId,
            periodTypeId,
            year
        }
        
        indicators.map((indicator, i) =>{
            IndicatorService.getIndicatorDataValues({...filters , indicatorId: indicator})
                .then(indicatorDataValues =>{
                    dispatch({
                        type: types.GET_FACILITY_INDIVIDUAL_INDICATOR_VALUES_RECEIVED,
                        indicatorDataValues,
                        indicatorId: indicator
                    })
                })
                .catch(error =>{
                    throw(error)
                })
        })
    }
}

export function fetchDataElements() {
    return function (dispatch, getState) {
        dispatch(showLoading(types.DATAELEMENTS_REQUESTED))
        return IndicatorService.getDatalements()
            .then(dataElements => {
                dispatch({
                    type: types.DATAELEMENTS_RECEIVED,
                    dataElements
                })
            })
            .catch(error => {
                throw (error)
            })
    }
}

export function fetchFacilityDataElementDataValues(facilityId, dataElementId) {
    return function (dispatch, getState) {
        dispatch(showLoading(types.FACILITY_DATAELEMENT_DATAVALUES_REQUESTED))
        return IndicatorService.getFacilityDataElementDatavalues(facilityId, dataElementId)
            .then(dataValues => {
                dataValues.sort((a, b) => a.periodid = b.periodid)
                dispatch({
                    type: types.FACILITY_DATAELEMENT_DATAVALUES_RECEIVED,
                    dataValues: dataValues
                })
            })
            .catch(error => { })
    }
}

export function fetchPeriodTypes(){
    return function(dispatch, getState){
        dispatch(showLoading(types.PERIODTYPES_REQUESTED))
        return IndicatorService.getPeriodTypes()
            .then(periodTypes => {
                return dispatch({
                    type: types.PERIODTYPES_RECEIVED,
                    periodTypes
                })
            })
            .catch(error =>{
                throw(error)
            })
    }
}