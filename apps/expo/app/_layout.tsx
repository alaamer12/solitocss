import { Provider } from 'app/provider'
import { Tabs } from 'expo-router'

export default function Root() {
  return (
    <Provider>
      <Tabs/>
    </Provider>
  )
}
