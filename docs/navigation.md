# Job Application Portal - Page Navigation & User Flow

## **User Roles**
- **Job Seekers**
- **Recruiters**
- **Admin (Optional)**

## **Navigation Flow**
### **1. Landing Page (Home)**
   - Users can navigate to **Login** or **Sign Up**.

### **2. Authentication Flow**
   - If **Sign Up**, users choose between **Job Seeker** or **Recruiter**.
   - After login:
     - **Job Seekers** are redirected to the **Job Seeker Dashboard**.
     - **Recruiters** are redirected to the **Recruiter Dashboard**.

### **3. Job Seeker Navigation**
   - **Job Listings → Job Details → Apply**
   - **Dashboard → Application Status**
   - **Profile → Resume Upload**

### **4. Recruiter Navigation**
   - **Dashboard → Post a Job**
   - **Manage Jobs → Job Applicants**
   - **Applicant Details → Update Application Status**


### **6. Other Navigation**
   - Footer contains links to **Contact Us, About Us, Privacy Policy**.
   - Navigation bar includes **Home, Jobs, Profile, Logout**.


## **Redirections & Access Control**
- **Unauthenticated users:** Redirected to login page when trying to access protected pages.
- **Job Seekers:** Cannot access recruiter features.
- **Recruiters:** Cannot access job seeker dashboards.

## **Responsive Navigation**
- **Desktop:** Full navigation menu.
- **Mobile:** Collapsible sidebar or dropdown menu.
