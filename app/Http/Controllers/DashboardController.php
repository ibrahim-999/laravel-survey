<?php

namespace App\Http\Controllers;

use App\Http\Resources\SurveyAnswerResource;
use App\Models\Survey;
use App\Models\SurveyAnswer;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();


        // Total Number of Survey
        $total = Survey::query()
            ->where('user_id', $user->id)
            ->count();

        // Latest Survey
        $latest = Survey::query()
            ->where('user_id', $user->id)
            ->latest('created_at')
            ->first();

        // Total Number of answers
        $totalAnswers = SurveyAnswer::query()
            ->join('surveys', 'survey_answers.survey_id', '=', 'surveys.id')
            ->where('surveys.user_id', $user->id)
            ->count();

        // Latest 5 answers

        $latestAnswers = SurveyAnswer::query()
            ->join('surveys', 'survey_answers.survey_id', '=', 'surveys.id')
            ->where('surveys.user_id', $user->id)
            ->latest('end_date', 'DESC')
            ->limit(5)
            ->getModels('survey_answers.*');

        return [
          'totalSurveys' => $total,
          'latestSurveys' => $latest ? new SurveyAnswer($latest) : null,
          'totalAnswers' => $totalAnswers,
          'latestAnswer' => SurveyAnswerResource::collection($latestAnswers)
        ];
    }
}
