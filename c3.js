// =========================================
// C3 - Student Grade Management System
// =========================================

const students = [
    {
        name: "Asad",
        scores: [85, 90, 78, 92],
        present: true
    },
    {
        name: "Sara",
        scores: [70, 65, "80", 75],
        present: true
    },
    {
        name: "Ali",
        scores: [55, 60, 50, null],
        present: false
    },
    {
        name: "Fatima",
        scores: [95, 98, 100, 92],
        present: true
    },
    {
        name: "Umar",
        scores: [],
        present: true
    }
];


// Function 1

function getAverage(scores) {

    const validScores = [];

    for (const score of scores) {

        if (score === null)
            continue;

        const num =
            Number(score);

        if (!isNaN(num)) {
            validScores.push(num);
        }
    }

    if (
        validScores.length === 0
    ) {
        return 0;
    }

    const total =
        validScores.reduce(
            (sum, score) =>
                sum + score,
            0
        );

    return Number(
        (
            total /
            validScores.length
        ).toFixed(1)
    );
}


// Function 2

function getGrade(avg) {

    if (avg >= 90)
        return "A+";

    if (avg >= 80)
        return "A";

    if (avg >= 70)
        return "B";

    if (avg >= 60)
        return "C";

    if (avg >= 50)
        return "D";

    return "F";
}


// Function 3

function generateReport(
    students
) {

    return students.map(
        student => {

            const average =
                getAverage(
                    student.scores
                );

            return {
                name: student.name,
                average,
                grade:
                    getGrade(
                        average
                    ),
                status:
                    student.present
                        ? "present"
                        : "absent",
                passed:
                    average >= 60 &&
                    student.present
            };
        }
    );
}


// Function 4

function getSummary(report) {

    const passed =
        report.filter(
            s => s.passed
        ).length;

    const failed =
        report.length - passed;

    const topStudent =
        report.reduce(
            (top, current) =>
                current.average >
                top.average
                    ? current
                    : top
        ).name;

    const classAverage =
        Number(
            (
                report.reduce(
                    (sum, s) =>
                        sum +
                        s.average,
                    0
                ) /
                report.length
            ).toFixed(1)
        );

    return {
        total:
            report.length,
        passed,
        failed,
        topStudent,
        classAverage
    };
}


// Generate Report

const report =
    generateReport(
        students
    );

console.log(
    "REPORT"
);

console.log(report);


// Summary

const summary =
    getSummary(report);

console.log(
    "SUMMARY"
);

console.log(summary);


// Prove Original Array Unchanged

console.log(
    "Original Students:"
);

console.log(students);
