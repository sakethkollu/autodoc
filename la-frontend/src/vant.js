import Vue from 'vue'
import enUS from 'vant/lib/locale/lang/en-US'
import {
  Locale,
  Button,
  Row,
  Col,
  Cell,
  CellGroup,
  List,
  NavBar,
  Tab,
  Tabs,
  Search
} from 'vant'
Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(List)
  .use(Cell)
  .use(CellGroup)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(Search)

Locale.use('en-US', enUS)
