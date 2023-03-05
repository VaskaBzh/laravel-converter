// layouts
import MainLayout from "./components/layouts/MainLayout.vue";

// navs
import HeaderLinks from "./components/navs/HeaderLinks.vue";

// accounts
import LoginComponent from "./components/account/LoginComponent.vue";
import LogoutComponent from "./components/account/LogoutComponent.vue";
import RegistrationComponent from "./components/account/RegistrationComponent.vue";

// converter
import ConverterComponent from "./components/converter/ConverterComponent.vue";

// header
import HeaderComponent from "./components/HeaderComponent.vue";

// UI
import MainTitle from "./components/UI/MainTitle.vue";
import MainInput from "./components/UI/MainInput.vue";
import MainSelect from "./components/UI/MainSelect.vue";
import MainButton from "./components/UI/MainButton.vue";
import FormRow from "./components/UI/FormRow.vue";

// forms
import ConvertForm from "./components/forms/ConvertForm.vue";
import RegistrationForm from "./components/forms/RegistrationForm.vue";
import LoginForm from "./components/forms/LoginForm.vue";

export default [
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    ConverterComponent,
    HeaderComponent,
    MainLayout,
    HeaderLinks,
    MainTitle,
    MainInput,
    ConvertForm,
    RegistrationForm,
    LoginForm,
    FormRow,
    MainSelect,
    MainButton,
];
