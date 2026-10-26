# Security Specification & Test Payloads

## 1. Data Invariants
- Submissions can be created by any student taking the exam without mandatory Google login, but submissions cannot be modified or deleted by arbitrary clients once submitted.
- Submissions require valid `studentName`, `schoolOrigin`, `studentPhone`, `parentPhone`, `packetType`, and non-negative scores.
- App settings (`/app_settings/{settingId}`) can be read publicly so students know if exams are active and which packet is active, but can only be modified by authenticated Admins.
- Admins (`/admins/{adminId}`) role list can only be managed by Super Admin (`smagmdepok@gmail.com` or authorized super admins).

## 2. The "Dirty Dozen" Payloads (Security Audit Payloads)
1. **Payload 1 (Shadow Field Injection in Submission):** A submission containing `{ isAdmin: true, bypassScore: 100 }`.
2. **Payload 2 (Negative / Malicious Score in Submission):** `{ totalScore: -999 }` or `{ totalScore: "100" }` (type confusion).
3. **Payload 3 (Arbitrary Modification of Previous Submission):** An attempt by a client to update another student's submission score.
4. **Payload 4 (Arbitrary Deletion of Submissions):** Non-admin attempting `DELETE /submissions/{submissionId}`.
5. **Payload 5 (Unauthenticated Settings Hijack):** An unauthenticated client writing to `/app_settings/config` to deactivate tests or alter school identity.
6. **Payload 6 (Admin Privilege Escalation):** An unauthenticated client writing to `/admins/{anyId}` to grant themselves `super_admin`.
7. **Payload 7 (Huge Denial-of-Wallet Payload):** A submission with a 1MB student name string exceeding `maxLength: 120`.
8. **Payload 8 (Invalid ID Poisoning):** An attempt to write to `/submissions/../../system_override`.
9. **Payload 9 (Packet Tampering):** A submission with illegal `packetType: "HACKED_PACKET"`.
10. **Payload 10 (Unauthorized Settings Deletion):** Attempting to delete system configuration `/app_settings/config`.
11. **Payload 11 (Non-Admin Reading Private Marketing Submissions):** Restricting list queries of all student submissions so only authorized administrators or the student's submission receipt can access.
12. **Payload 12 (Admin Role Spoofing without verification):** Attempting to claim admin access with unverified or forged credentials.

## 3. Test Runner
Verification suite ensuring all 12 malicious payloads are blocked by Firestore Security Rules.
