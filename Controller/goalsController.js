const asyncHandler = require('express-async-handler')


// @desc    Get all goals
// @route    GET /api/goals
// access    Private
const getGoals = asyncHandler( async (req, res) => {

    res.status(200).json({message: 'Get Goals'})
} );

// @desc   Get all goals
// @route    GET /api/goals
// access    Private
const setGoal = asyncHandler( async (req, res) => {

    if (!req.body.text) {
        res.status(400) ;
        throw new Error('Please add a Text');
    }



    res.status(200).json({message: 'Set Goal'})
});


// @desc   Get all goals
// @route    GET /api/goals
// access    Private
const updateGoal = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
});


// @descip   Get all goals
// @route    GET /api/goals
// access    Private
const deleteGoal = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})

} );

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}