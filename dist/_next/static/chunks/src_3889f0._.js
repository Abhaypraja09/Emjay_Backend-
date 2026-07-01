(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_3889f0._.js", {

"[project]/src/utils/cn.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "cn": ()=>cn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function cn(...inputs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"](inputs));
}

})()),
"[project]/src/utils/pdfGenerator.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "generateBulkSalarySlipsPDF": ()=>generateBulkSalarySlipsPDF,
    "generateSalarySlipPDF": ()=>generateSalarySlipPDF
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const getMonthName = (monthIndex)=>{
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return months[monthIndex] || '';
};
const generateSalarySlipPDF = (payroll, month, year)=>{
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsPDF"]('p', 'mm', 'a4');
    addSalarySlipPage(doc, payroll, month, year);
    return doc;
};
const generateBulkSalarySlipsPDF = (payrolls, month, year)=>{
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsPDF"]('p', 'mm', 'a4');
    payrolls.forEach((payroll, index)=>{
        if (index > 0) {
            doc.addPage();
        }
        addSalarySlipPage(doc, payroll, month, year);
    });
    return doc;
};
const addSalarySlipPage = (doc, payroll, month, year)=>{
    const staff = payroll.staff || {};
    const monthName = getMonthName(month);
    // Outer Border
    doc.rect(5, 5, 200, 287);
    doc.rect(7, 7, 196, 283);
    // Header Banner
    doc.setFillColor(30, 41, 59); // Slate 800
    doc.rect(7, 7, 196, 25, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('EMJAY BREWERY', 15, 22);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('PAYROLL MANAGEMENT SYSTEM - SALARY SLIP', 15, 28);
    doc.setFont('helvetica', 'bold');
    doc.text(`STATEMENT PERIOD: ${monthName.toUpperCase()} ${year}`, 130, 22);
    // Info Section
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    // Left Column Info
    doc.setFont('helvetica', 'bold');
    doc.text('EMPLOYEE DETAILS', 15, 42);
    doc.setFont('helvetica', 'normal');
    doc.text(`Name: ${staff.name || 'N/A'}`, 15, 48);
    doc.text(`Mobile: ${staff.mobile || 'N/A'}`, 15, 54);
    doc.text(`Designation: ${staff.designation || 'N/A'}`, 15, 60);
    doc.text(`Staff Type: ${staff.staffType || 'Regular'}`, 15, 66);
    // Right Column Info
    doc.setFont('helvetica', 'bold');
    doc.text('PAYMENT METRICS', 115, 42);
    doc.setFont('helvetica', 'normal');
    doc.text(`Cycle Dates: ${payroll.cycleStart || `01/${String(month + 1).padStart(2, '0')}/${year}`} to ${payroll.cycleEnd || `${new Date(year, month + 1, 0).getDate()}/${String(month + 1).padStart(2, '0')}/${year}`}`, 115, 48);
    doc.text(`Cycle Length: ${payroll.totalDaysInCycle || 30} Days`, 115, 54);
    doc.text(`Joining Date: ${staff.joiningDate ? new Date(staff.joiningDate).toLocaleDateString('en-GB') : 'N/A'}`, 115, 60);
    doc.text(`Payment Status: ${(payroll.status || 'pending').toUpperCase()}`, 115, 66);
    // Divider Line
    doc.setDrawColor(200, 200, 200);
    doc.line(15, 72, 195, 72);
    // Attendance Metrics Table
    doc.setFont('helvetica', 'bold');
    doc.text('ATTENDANCE SUMMARY', 15, 80);
    const presentDays = payroll.presentDays || 0;
    const paidLeaves = payroll.paidLeaves || 0;
    const unpaidAbsents = payroll.unpaidAbsents || 0;
    const paidSundays = payroll.paidSundays || 0;
    const unpaidSundays = payroll.unpaidSundays || 0;
    const overtimeHours = payroll.overtimeHours || 0;
    doc.autoTable({
        startY: 84,
        margin: {
            left: 15,
            right: 15
        },
        head: [
            [
                'Present Days',
                'Paid Leaves',
                'Unpaid Absents',
                'Paid Sundays',
                'Unpaid Sundays',
                'Overtime (Hrs)'
            ]
        ],
        body: [
            [
                presentDays,
                paidLeaves,
                unpaidAbsents,
                paidSundays,
                unpaidSundays,
                overtimeHours
            ]
        ],
        theme: 'grid',
        headStyles: {
            fillColor: [
                71,
                85,
                105
            ],
            textColor: [
                255,
                255,
                255
            ],
            fontStyle: 'bold'
        },
        bodyStyles: {
            halign: 'center',
            fontStyle: 'bold'
        },
        styles: {
            fontSize: 9
        }
    });
    // Financial Breakdown Table
    const startYFinancial = doc.lastAutoTable.finalY + 10;
    doc.setFont('helvetica', 'bold');
    doc.text('FINANCIAL BREAKDOWN', 15, startYFinancial);
    const basicSalary = payroll.basicSalary || 0;
    const earnedSalary = payroll.earnedSalary || 0;
    const overtimeAmount = payroll.overtimeAmount || 0;
    const allowances = payroll.allowances || 0;
    const bonus = payroll.bonus || 0;
    const advances = payroll.advances || 0;
    const deduction = payroll.deduction || 0;
    const netPayable = payroll.amount || earnedSalary + allowances - advances;
    const finalPaid = payroll.finalPaidAmount || netPayable + bonus - deduction;
    const financialHeaders = [
        [
            'Description',
            'Earnings (INR)',
            'Deductions (INR)'
        ]
    ];
    const financialRows = [
        [
            'Base Salary (Full Month)',
            basicSalary.toFixed(2),
            '-'
        ],
        [
            'Earned Salary (Attendance-based)',
            earnedSalary.toFixed(2),
            '-'
        ],
        [
            'Overtime Allowance',
            overtimeAmount.toFixed(2),
            '-'
        ],
        [
            'Other Allowances / Extra Duty',
            allowances.toFixed(2),
            '-'
        ],
        [
            'Bonus',
            bonus.toFixed(2),
            '-'
        ],
        [
            'Salary Advances / Loans',
            '-',
            advances.toFixed(2)
        ],
        [
            'Fine / Penalty Deductions',
            '-',
            deduction.toFixed(2)
        ]
    ];
    doc.autoTable({
        startY: startYFinancial + 4,
        margin: {
            left: 15,
            right: 15
        },
        head: financialHeaders,
        body: financialRows,
        theme: 'striped',
        headStyles: {
            fillColor: [
                51,
                65,
                85
            ],
            textColor: [
                255,
                255,
                255
            ]
        },
        columnStyles: {
            0: {
                cellWidth: 100
            },
            1: {
                halign: 'right',
                fontStyle: 'bold'
            },
            2: {
                halign: 'right',
                fontStyle: 'bold',
                textColor: [
                    220,
                    38,
                    38
                ]
            }
        },
        styles: {
            fontSize: 9
        }
    });
    // Net Payout Box
    const startYSummary = doc.lastAutoTable.finalY + 8;
    doc.setFillColor(248, 250, 252);
    doc.rect(15, startYSummary, 180, 24, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.rect(15, startYSummary, 180, 24);
    doc.setTextColor(51, 65, 85);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Final Net Payable (Earned Salary + Allowances + Bonus - Advances - Fine):', 20, startYSummary + 10);
    doc.setTextColor(30, 41, 59);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text(`INR ${finalPaid.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`, 20, startYSummary + 18);
    // Signature lines
    const startYSign = startYSummary + 45;
    doc.setDrawColor(150, 150, 150);
    doc.setLineWidth(0.3);
    // Line 1
    doc.line(20, startYSign, 70, startYSign);
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');
    doc.text('Prepared By (HR/Finance)', 20, startYSign + 5);
    // Line 2
    doc.line(80, startYSign, 130, startYSign);
    doc.text('Approved By (Manager/Owner)', 80, startYSign + 5);
    // Line 3
    doc.line(140, startYSign, 190, startYSign);
    doc.text('Employee Signature', 140, startYSign + 5);
    // Footer Disclaimer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('This is a computer-generated salary slip and does not require a physical signature unless requested.', 15, 275);
    doc.text('Emjay Brewery © All Rights Reserved.', 15, 280);
};

})()),
"[project]/src/utils/excelGenerator.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "exportAttendanceToExcel": ()=>exportAttendanceToExcel,
    "exportPayrollToExcel": ()=>exportPayrollToExcel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const exportAttendanceToExcel = (mergedData, selectedDate)=>{
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-GB');
    // Map data to table rows
    const rows = mergedData.map((item)=>{
        const staff = item.staff || {};
        const att = item.attendance || {};
        let inTime = 'N/A';
        let outTime = 'N/A';
        if (att.punchIn?.time) {
            inTime = new Date(att.punchIn.time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });
        }
        if (att.punchOut?.time) {
            outTime = new Date(att.punchOut.time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });
        }
        return {
            'Date': formattedDate,
            'Staff Name': staff.name || 'N/A',
            'Designation': staff.designation || 'N/A',
            'Staff Type': staff.staffType || 'Regular',
            'Status': (att.status || 'Not Punched In').toUpperCase(),
            'Punch In Time': inTime,
            'Punch Out Time': outTime,
            'Location Tracked': att.punchIn?.location?.lat ? 'Yes' : 'No'
        };
    });
    // Create worksheet
    const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.utils.json_to_sheet(rows);
    const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.utils.book_new();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.utils.book_append_sheet(workbook, worksheet, 'Attendance');
    // Auto-fit columns
    const maxProps = [
        {
            wch: 15
        },
        {
            wch: 25
        },
        {
            wch: 20
        },
        {
            wch: 15
        },
        {
            wch: 15
        },
        {
            wch: 15
        },
        {
            wch: 15
        },
        {
            wch: 18
        }
    ];
    worksheet['!cols'] = maxProps;
    // Generate buffer and trigger download
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.writeFile(workbook, `Attendance_Report_${selectedDate}.xlsx`);
};
const exportPayrollToExcel = (payrollData, month, year)=>{
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const monthName = monthNames[month] || 'Month';
    // Map data to table rows
    const rows = payrollData.map((p)=>{
        const staff = p.staff || {};
        return {
            'Staff Name': staff.name || 'N/A',
            'Staff Type': staff.staffType || 'Regular',
            'Base Salary (INR)': p.basicSalary || 0,
            'Earned Salary (INR)': p.earnedSalary || 0,
            'Present Days': p.presentDays || 0,
            'Paid Leaves': p.paidLeaves || 0,
            'Unpaid Absents': p.unpaidAbsents || 0,
            'Paid Sundays': p.paidSundays || 0,
            'Overtime Hours': p.overtimeHours || 0,
            'Overtime Pay (INR)': p.overtimeAmount || 0,
            'Allowances (INR)': p.allowances || 0,
            'Bonus (INR)': p.bonus || 0,
            'Advances Deducted (INR)': p.advances || 0,
            'Fine / Penalties (INR)': p.deduction || 0,
            'Net Payable (INR)': p.finalPaidAmount || p.amount || 0,
            'Payment Status': (p.status || 'pending').toUpperCase()
        };
    });
    // Create worksheet
    const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.utils.json_to_sheet(rows);
    const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.utils.book_new();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.utils.book_append_sheet(workbook, worksheet, 'Payroll');
    // Auto-fit columns
    const maxProps = [
        {
            wch: 25
        },
        {
            wch: 15
        },
        {
            wch: 18
        },
        {
            wch: 18
        },
        {
            wch: 15
        },
        {
            wch: 15
        },
        {
            wch: 15
        },
        {
            wch: 15
        },
        {
            wch: 15
        },
        {
            wch: 18
        },
        {
            wch: 18
        },
        {
            wch: 15
        },
        {
            wch: 22
        },
        {
            wch: 20
        },
        {
            wch: 18
        },
        {
            wch: 15
        }
    ];
    worksheet['!cols'] = maxProps;
    // Generate buffer and trigger download
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.writeFile(workbook, `Payroll_Report_${monthName}_${year}.xlsx`);
};

})()),
"[project]/src/components/Sidebar.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__LayoutDashboard$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) {export default as LayoutDashboard}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Package$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) {export default as Package}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FlaskConical$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) {export default as FlaskConical}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ShoppingCart$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) {export default as ShoppingCart}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) {export default as FileText}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__LogOut$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) {export default as LogOut}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronLeft$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) {export default as ChevronLeft}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRight$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) {export default as ChevronRight}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Menu$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) {export default as Menu}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) {export default as X}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__User$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) {export default as User}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Monitor$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) {export default as Monitor}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Wine$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/wine.js [app-client] (ecmascript) {export default as Wine}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ShoppingBag$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) {export default as ShoppingBag}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CreditCard$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) {export default as CreditCard}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Wallet$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) {export default as Wallet}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ShieldCheck$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) {export default as ShieldCheck}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Landmark$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) {export default as Landmark}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/cn.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const Sidebar = ()=>{
    _s();
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]();
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]();
    const [isCollapsed, setIsCollapsed] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [user, setUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const userStr = localStorage.getItem('user');
        if (userStr) {
            setUser(JSON.parse(userStr));
        }
    }, []);
    const navItems = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__LayoutDashboard$7d$__["LayoutDashboard"]
        },
        {
            name: 'Live Board',
            path: '/live-board',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Monitor$7d$__["Monitor"]
        },
        {
            name: 'Bottles',
            path: '/bottles',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Wine$7d$__["Wine"]
        },
        {
            name: 'Production',
            path: '/production',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FlaskConical$7d$__["FlaskConical"]
        },
        {
            name: 'Purchases',
            path: '/purchases',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ShoppingBag$7d$__["ShoppingBag"]
        },
        {
            name: 'Branch Stock',
            path: '/branch-stock',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Package$7d$__["Package"]
        },
        {
            name: 'Sales',
            path: '/sales',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ShoppingCart$7d$__["ShoppingCart"]
        },
        {
            name: 'Cash Book',
            path: '/cash-book',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Wallet$7d$__["Wallet"]
        },
        {
            name: 'Bank Book',
            path: '/bank-book',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Landmark$7d$__["Landmark"]
        },
        {
            name: 'Party Ledgers',
            path: '/party-ledgers',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CreditCard$7d$__["CreditCard"]
        },
        {
            name: 'Staff',
            path: '/staff',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ShieldCheck$7d$__["ShieldCheck"]
        },
        {
            name: 'Reports',
            path: '/reports',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__["FileText"]
        }
    ];
    const handleLogout = ()=>{
        localStorage.removeItem('user');
        router.push('/login');
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isMobileMenuOpen && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity",
                onClick: ()=>setIsMobileMenuOpen(false)
            }, void 0, false, {
                fileName: "<[project]/src/components/Sidebar.tsx>",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                className: "lg:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-gray-200 rounded-lg shadow-sm",
                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                children: isMobileMenuOpen ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Sidebar.tsx>",
                    lineNumber: 80,
                    columnNumber: 29
                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Menu$7d$__["Menu"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Sidebar.tsx>",
                    lineNumber: 80,
                    columnNumber: 57
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Sidebar.tsx>",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("fixed top-0 left-0 h-full z-40 bg-white border-r border-gray-200 transition-all duration-300 lg:flex flex-col shadow-sm", isCollapsed ? "w-20" : "w-64", isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"),
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "h-20 flex items-center px-6 border-b border-gray-100 bg-gray-50/50",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "w-10 h-10 rounded-lg overflow-hidden border border-gray-200 bg-white",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                        src: "/Logo.jpg",
                                        alt: "Logo",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Sidebar.tsx>",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Sidebar.tsx>",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                !isCollapsed && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "text-lg font-bold text-gray-900 leading-none",
                                            children: "Emjay"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Sidebar.tsx>",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "text-[10px] font-semibold text-blue-600 uppercase tracking-wider mt-1",
                                            children: "Brewery"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Sidebar.tsx>",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/Sidebar.tsx>",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/Sidebar.tsx>",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Sidebar.tsx>",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    !isCollapsed && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "p-4 m-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__User$7d$__["User"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Sidebar.tsx>",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Sidebar.tsx>",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "text-xs font-bold text-gray-900 truncate",
                                        children: user?.name || 'Admin'
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Sidebar.tsx>",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "text-[9px] text-gray-500 font-medium uppercase",
                                        children: user?.role || 'Manager'
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Sidebar.tsx>",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/Sidebar.tsx>",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/Sidebar.tsx>",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("nav", {
                        className: "flex-1 mt-4 px-3 space-y-1",
                        children: navItems.map((item)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.path,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("flex items-center gap-3 px-4 py-3 rounded-lg transition-all", pathname === item.path ? "bg-blue-600 text-white shadow-md shadow-blue-200" : "text-gray-500 hover:text-blue-600 hover:bg-blue-50"),
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](item.icon, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Sidebar.tsx>",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    !isCollapsed && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "text-sm font-semibold",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Sidebar.tsx>",
                                        lineNumber: 132,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, item.path, true, {
                                fileName: "<[project]/src/components/Sidebar.tsx>",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Sidebar.tsx>",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "p-4 border-t border-gray-100 space-y-2 bg-gray-50/30",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: ()=>setIsCollapsed(!isCollapsed),
                                className: "hidden lg:flex w-full items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-white transition-all",
                                children: [
                                    isCollapsed ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRight$7d$__["ChevronRight"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Sidebar.tsx>",
                                        lineNumber: 143,
                                        columnNumber: 28
                                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronLeft$7d$__["ChevronLeft"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Sidebar.tsx>",
                                        lineNumber: 143,
                                        columnNumber: 67
                                    }, this),
                                    !isCollapsed && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "text-xs font-semibold",
                                        children: "Collapse"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Sidebar.tsx>",
                                        lineNumber: 144,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/Sidebar.tsx>",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: handleLogout,
                                className: "flex w-full items-center gap-3 px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-all font-semibold",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__LogOut$7d$__["LogOut"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Sidebar.tsx>",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    !isCollapsed && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "text-xs",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Sidebar.tsx>",
                                        lineNumber: 152,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/Sidebar.tsx>",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/Sidebar.tsx>",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/Sidebar.tsx>",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(Sidebar, "IgoH4U51a2QA7mdB5mD5e9qC3s0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_refresh__.register(_c, "Sidebar");

})()),
"[project]/src/services/api.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const getBaseUrl = ()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL;
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
        return 'http://localhost:5001/api';
    }
    return '/api';
};
const API_URL = getBaseUrl();
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_URL
});
api.interceptors.request.use((config)=>{
    if (typeof window !== 'undefined') {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            const user = JSON.parse(userStr);
            if (user.token) {
                config.headers.Authorization = `Bearer ${user.token}`;
                // Backup: attach to query params (bypass Apache stripping)
                config.params = {
                    ...config.params,
                    token: user.token
                };
            }
        }
    }
    return config;
});
api.interceptors.response.use((response)=>response, (error)=>{
    if (error.response && error.response.status === 401) {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;

})()),
}]);

//# sourceMappingURL=src_3889f0._.js.map