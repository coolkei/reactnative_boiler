import { put, call } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'
import { WeatherService } from 'App/Service/WeatherService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch the weather temperature.
 */
export function* fetchTemperature() {
  // Fetch the temperature from an API
  const temperature = yield call(WeatherService.fetchTemperature)

  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  if (temperature) {
    yield put(ExampleActions.fetchTemperatureSuccess(temperature))
  } else {
    yield put(
      ExampleActions.fetchTemperatureFailure('There was an error while fetching the temperature.')
    )
  }
}
