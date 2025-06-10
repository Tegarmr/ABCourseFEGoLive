import { Routes, Route } from "react-router-dom";
import Overview from "./overview/Overview";
import App from "./overview/App";
import LoginRegister from "./LoginRegister/index";
import ForgotPassword from "./LoginRegister/ForgotPassword";
import ResetPassword from "./LoginRegister/ResetPassword";

import AccessLogger from "./components/AccessLogger";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

/* Import semua materials */
import Adjectives from "./materials/Adjectives";
import Adverb from "./materials/Adverb";
import Articles from "./materials/Articles";
import Causative from "./materials/Causative";
import FutureP from "./materials/FutureP";
import Indirect from "./materials/Indirect";
import Past from "./materials/Past";
import PastP from "./materials/PastP";
import Prepositions from "./materials/Prepositions";
import Present from "./materials/Present";
import PresentPerfect from "./materials/PresentPerfect";
import Question from "./materials/Question";
import SimpleF from "./materials/SimpleF";
import Subject from "./materials/Subject";
import Tenses from "./materials/Tenses";
import Conditionals from "./materials/Conditional";
import Conjunctions from "./materials/Conjunctions";
import FutureContinuousTense from "./materials/FutureContinuousTense";
import FuturePerfectContinuousTense from "./materials/FuturePerfectContinuousTense";
import Gerund from "./materials/Gerund";
import HelpingVerbs from "./materials/HelpingVerbs";
import ModalAuxiliary from "./materials/ModalAuxilliary";
import Nouns from "./materials/Nouns";
import PassiveVoice from "./materials/PassiveVoice";
import PastContinuousTense from "./materials/PastContinuousTense";
import PastPerfectContinuousTense from "./materials/PastPerfectContinuousTense";
import Pronouns from "./materials/Pronouns";
import PresentContinuousTense from "./materials/PresentContinuousTense";
import PresentPerfectContinuousTense from "./materials/PresentPerfectContinuousTense";
import Verbs from "./materials/Verbs";
import Material from "./materials/Material";

/* Import semua quizzes */
import QuizAdjectives from "./quiz/QuizAdjectives";
import QuizAdverbs from "./quiz/QuizAdverbs";
import QuizArticles from "./quiz/QuizArticles";
import QuizCausative from "./quiz/QuizCausative";
import QuizConditional from "./quiz/QuizConditional";
import QuizConjunctions from "./quiz/QuizConjunctions";
import QuizFutureContinuousTense from "./quiz/QuizFutureContinuousTense";
import QuizFuturePerfectContinuousTense from "./quiz/QuizFuturePerfectContinuousTense";
import QuizGerund from "./quiz/QuizGerund";
import QuizHelpingVerbs from "./quiz/QuizHelpingVerbs";
import QuizIndirectSpeech from "./quiz/QuizIndirectSpeech";
import QuizModalAuxiliary from "./quiz/QuizModalAuxiliary";
import QuizNouns from "./quiz/QuizNouns";
import QuizPassiveVoice from "./quiz/QuizPassiveVoice";
import QuizPastContinuousTense from "./quiz/QuizPastContinuousTense";
import QuizPastPerfectContinuousTense from "./quiz/QuizPastPerfectContinuousTense";
import QuizPastPerfectTense from "./quiz/QuizPastPerfectTense";
import QuizPrepositions from "./quiz/QuizPrepositions";
import QuizPresentContinuousTense from "./quiz/QuizPresentContinuousTense";
import QuizPresentPerfectContinuousTense from "./quiz/QuizPresentPerfectContinuousTense";
import QuizPresentPerfectTense from "./quiz/QuizPresentPerfectTense";
import QuizPronouns from "./quiz/QuizPronouns";
import QuizQuestionWords from "./quiz/QuizQuestionWords";
import QuizSimpleFutureTense from "./quiz/QuizSimpleFutureTense";
import QuizSimplePastTense from "./quiz/QuizSimplePastTense";
import QuizSimplePresentTense from "./quiz/QuizSimplePresentTense";
import QuizSubjectVerbAgreement from "./quiz/QuizSubjectVerbAgreement";
import QuizSubjunctive from "./quiz/QuizSubjunctive";
import QuizVerbs from "./quiz/QuizVerbs";
import QuizTenses from "./quiz/QuizTenses";
import AuthCallback from "./components/AuthCallback";

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Overview />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/signup" element={<LoginRegister />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/auth/callback" element={<AuthCallback />} />

      {/* Protected routes */}
      <Route
        element={
          <ProtectedRoute>
            <AccessLogger>
              <Layout />
            </AccessLogger>
          </ProtectedRoute>
        }
      >
        {/* Quizzes */}
        <Route path="/adjective/quiz" element={<QuizAdjectives />} />
        <Route path="/adverb/quiz" element={<QuizAdverbs />} />
        <Route path="/articles/quiz" element={<QuizArticles />} />
        <Route path="/indirect/quiz" element={<QuizIndirectSpeech />} />
        <Route
          path="/futurep/quiz"
          element={<QuizFuturePerfectContinuousTense />}
        />
        <Route path="/past/quiz" element={<QuizSimplePastTense />} />
        <Route path="/pastp/quiz" element={<QuizPastPerfectTense />} />
        <Route path="/prepositions/quiz" element={<QuizPrepositions />} />
        <Route path="/present/quiz" element={<QuizSimplePresentTense />} />
        <Route
          path="/presentperfect/quiz"
          element={<QuizPresentPerfectTense />}
        />
        <Route path="/question/quiz" element={<QuizQuestionWords />} />
        <Route path="/simplef/quiz" element={<QuizSimpleFutureTense />} />
        <Route path="/subject/quiz" element={<QuizSubjectVerbAgreement />} />
        <Route path="/conditional/quiz" element={<QuizConditional />} />
        <Route path="/conjunctions/quiz" element={<QuizConjunctions />} />
        <Route
          path="/future-continuous-tense/quiz"
          element={<QuizFutureContinuousTense />}
        />
        <Route
          path="/future-perfect-continuous-tense/quiz"
          element={<QuizFuturePerfectContinuousTense />}
        />
        <Route path="/gerund/quiz" element={<QuizGerund />} />
        <Route path="/helping-verbs/quiz" element={<QuizHelpingVerbs />} />
        <Route path="/modal-auxiliary/quiz" element={<QuizModalAuxiliary />} />
        <Route path="/nouns/quiz" element={<QuizNouns />} />
        <Route path="/passive-voice/quiz" element={<QuizPassiveVoice />} />
        <Route
          path="/past-continuous-tense/quiz"
          element={<QuizPastContinuousTense />}
        />
        <Route
          path="/past-perfect-continuous-tense/quiz"
          element={<QuizPastPerfectContinuousTense />}
        />
        <Route
          path="/present-continuous-tense/quiz"
          element={<QuizPresentContinuousTense />}
        />
        <Route
          path="/present-perfect-continuous-tense/quiz"
          element={<QuizPresentPerfectContinuousTense />}
        />
        <Route path="/pronouns/quiz" element={<QuizPronouns />} />
        <Route path="/subjunctive/quiz" element={<QuizSubjunctive />} />
        <Route path="/verbs/quiz" element={<QuizVerbs />} />
        <Route path="/causative/quiz" element={<QuizCausative />} />
        <Route path="/tenses/quiz" element={<QuizTenses />} />

        {/* Materials */}
        <Route path="/material/:materialId" element={<Material />} />
        <Route path="/adjective" element={<Adjectives />} />
        <Route path="/adverb" element={<Adverb />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/futurep" element={<FutureP />} />
        <Route path="/indirect" element={<Indirect />} />
        <Route path="/past" element={<Past />} />
        <Route path="/pastp" element={<PastP />} />
        <Route path="/prepositions" element={<Prepositions />} />
        <Route path="/present" element={<Present />} />
        <Route path="/presentperfect" element={<PresentPerfect />} />
        <Route path="/question" element={<Question />} />
        <Route path="/simplef" element={<SimpleF />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/causative" element={<Causative />} />
        <Route path="/tenses" element={<Tenses />} />
        <Route path="/conditionals" element={<Conditionals />} />
        <Route path="/conjunctions" element={<Conjunctions />} />
        <Route
          path="/futureContinousTense"
          element={<FutureContinuousTense />}
        />
        <Route
          path="/futurePerfectContinousTense"
          element={<FuturePerfectContinuousTense />}
        />
        <Route path="/gerund" element={<Gerund />} />
        <Route path="/helpingVerbs" element={<HelpingVerbs />} />
        <Route path="/modalAuxilliary" element={<ModalAuxiliary />} />
        <Route path="/nouns" element={<Nouns />} />
        <Route path="/passiveVoice" element={<PassiveVoice />} />
        <Route path="/pastContinuousTense" element={<PastContinuousTense />} />
        <Route
          path="/pastPerfectContinuousTense"
          element={<PastPerfectContinuousTense />}
        />
        <Route path="/pronouns" element={<Pronouns />} />
        <Route
          path="/presentContinuousTense"
          element={<PresentContinuousTense />}
        />
        <Route
          path="/presentPerfectContinuousTense"
          element={<PresentPerfectContinuousTense />}
        />
        <Route path="/verbs" element={<Verbs />} />

        {/* App */}
        <Route path="/app" element={<App />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
