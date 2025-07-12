---
order: 0
layout: post
title: Safe End-Effector Trajectory Tracking for a 2-DOF Robotic Arm using CLF-CBF QP - Technical Report
description: This project investigates the application of Control Lyapunov Functions (CLFs) and Control Barrier Functions (CBFs) to ensure both performance and safety in robotic control. We implemented a CLF-CBF QP controller for a 2-DOF robotic arm that guarantees safe trajectory tracking while avoiding obstacles in its workspace.
skills:
  - Python
  - Control Lyapunov Function
  - Control Barrier Function
main-image: /projects/safe-robot-arm/safe.jpg
---

## 1. Introduction and Motivation
### 1.1 Project Background
Robotic systems are increasingly being deployed in dynamic environments where they must operate safely while achieving their objectives. This project focuses on developing a control system that ensures both performance and safety in robotic control.

### 1.2 Why This Matters
- **Safety-Critical Applications**: From industrial robots to autonomous vehicles, ensuring safe operation is paramount
- **Real-time Control**: The need for computationally efficient methods that can run in real-time
- **Guaranteed Performance**: Mathematical guarantees for both tracking performance and safety constraints

### 1.3 Potential Impact
- **Industrial Automation**: Safe human-robot collaboration in manufacturing
- **Autonomous Systems**: Safe navigation in dynamic environments
- **Medical Robotics**: Ensuring patient safety during robotic procedures

## 2. Theoretical Background: CLF and CBF

Control certificate functions are scalar functions used to certify certain properties of a dynamical system under control, such as stability and safety. Two key types are:

### Control Lyapunov Functions (CLF)
A **Control Lyapunov Function** is used to certify the stabilizability of a system. For a nonlinear system $\dot{x} = f(x, u)$, a function $V(x)$ is a CLF if:
- $V(x) > 0$ for all $x \neq x^*$ (the equilibrium), and $V(x^*) = 0$
- There exists a control input $u$ such that the time derivative $\dot{V}(x, u) < 0$ for all $x \neq x^*$

This ensures that the system can be driven towards the equilibrium, certifying stability. The CLF condition can be enforced as a constraint in an optimization-based controller.

### Control Barrier Functions (CBF)
A **Control Barrier Function** is used to certify safety. Given a safe set $\mathcal{S} = \{ x \mid b(x) \geq 0 \}$, a function $b(x)$ is a CBF for the system $\dot{x} = f(x, u)$ if there exists a class $\mathcal{K}$ function $\alpha$ such that:
$$
\max_{u \in \mathcal{U}} \nabla b(x)^T f(x, u) \geq -\alpha(b(x)), \quad \forall x \in \mathcal{S}
$$
This condition ensures that, for all states in the safe set, there exists a control input that keeps the system within the safe set for all future time. The CBF constraint can also be enforced in an optimization-based controller.

### Combining CLF and CBF
For control affine systems, both CLF and CBF constraints can be combined in a quadratic program (QP), allowing the controller to balance stability (performance) and safety at each timestep. This approach is convex and can be solved efficiently.

*Reference: [UW-CTRL Linear Multivariable Control Book, Control Certificate Functions](https://uw-ctrl.github.io/lmc-book/lectures/control-certificates.html)*

## 3. Related Work
### 3.1 Traditional Approaches
- **Potential Field Methods**: Simple but can get stuck in local minima
- **RRT/PRM**: Good for path planning but computationally expensive
- **MPC**: Effective but requires solving optimization problems at each step

### 3.2 Modern Methods
- **CLF-CBF QP**: Combines performance guarantees with safety constraints
- **Learning-based Methods**: Neural networks for control but lack guarantees
- **Hybrid Methods**: Combining classical and learning approaches

## 4. Problem Statement
We consider a 2-DOF robotic manipulator that must:
1. Track a desired trajectory while
2. Avoiding obstacles in its workspace

### 4.1 Mathematical Formulation
#### System Dynamics
$$
\dot{q} = u
$$
where $q$ is the joint angle vector and $u$ is the control input.

#### Control Objectives
1. **Tracking**: Minimize error between current and desired joint angles
2. **Safety**: Maintain minimum distance from obstacles

## 5. Methodology
### 5.1 Step-by-Step Implementation

#### 1. Forward Kinematics
Given joint angles q1, q2 and link lengths l1, l2:
- **Elbow position:**
  $$
  x_1 = l_1 \cos(q_1), \quad y_1 = l_1 \sin(q_1)
  $$
- **End-effector position:**
  $$
  x_2 = x_1 + l_2 \cos(q_1 + q_2), \quad y_2 = y_1 + l_2 \sin(q_1 + q_2)
  $$

#### 2. Inverse Kinematics
Given a desired end-effector position $(x_d, y_d)$:
- Compute:
  $$
  \cos(q_2^d) = \frac{x_d^2 + y_d^2 - l_1^2 - l_2^2}{2 l_1 l_2}
  $$
  $$
  q_2^d = \arccos(\cos(q_2^d))
  $$
  $$
  k_1 = l_1 + l_2 \cos(q_2^d), \quad k_2 = l_2 \sin(q_2^d)
  $$
  $$
  q_1^d = \arctan2(y_d, x_d) - \arctan2(k_2, k_1)
  $$

#### 3. Error Calculation
- $e = q - q_d$
- CLF: $V = e^T e$, $dV/de = 2e$

#### 4. CLF and CBF Constraints
- **CLF constraint:**  
  $$
  2e^T u + c_{clf} V \leq \delta
  $$
  ($\delta$ is a relaxation variable, penalized in the cost)

- **CBF constraint:**  
  For each sampled point $p$ on the robot and each obstacle:
  $$
  h(p) = \|p - p_{obs}\|^2 - (r_{obs} + b)^2
  $$
  $$
  \dot{h}(p) = 2 (p - p_{obs})^T J_p u
  $$
  $$
  2 (p - p_{obs})^T J_p u + \alpha_{cbf} h(p) \geq 0
  $$

#### 5. QP Setup
- **Variables:** $u$ (joint velocities), $\delta$
- **Objective:**
  $$
  \min \|u\|^2 + \text{relax penalty} \cdot \delta^2 + \text{smooth weight} \cdot \|u - u_{prev}\|^2
  $$
- **Constraints:**
  - CLF constraint
  - CBF constraints (for all sampled points and obstacles)
  - Velocity limits: $u_{min} \leq u \leq u_{max}$

### 5.2 Implementation Details
- **Sampling**: Multiple points along robot links
- **Jacobian Computation**: Analytical for efficiency
- **QP Solver**: OSQP for real-time performance

## 6. Experiments and Results
### 6.1 Experimental Setup
- **Robot Parameters**:
  - Link lengths: $l_1 = l_2 = 1.0$
  - Joint limits: $[-2\pi, 2\pi]$
  - Velocity limits: $[-1, 1]$

- **Control Parameters**:
  - CLF gain: $c_{clf} = 1.0$
  - CBF gain: $\alpha_{cbf} = 1.0$
  - Safety buffer: $b = 0.1$

### 6.2 Scenario Testing
We tested the controller in four different scenarios:

**Scenario 1: Single Obstacle, Circular Path**
![Scenario 1](/projects/safe-robot-arm/Figures/Scenario_1__Single_Obstacle__Circle_Path.gif)
- One obstacle placed near the path
- End-effector tracks a circular trajectory
- Successful obstacle avoidance and path tracking
- Quantitative Results:
  - Mean tracking error: 0.1450 m
  - Max tracking error: 0.3007 m
  - Min distance to obstacle: 0.0000 m
  - Number of safety margin violations: 0
- Tracking Error vs Time:
  ![Tracking Error Scenario 1](/projects/safe-robot-arm/Figures/tracking_error_scenario1.png)

**Scenario 2: Two Obstacles, Elliptical Path**
![Scenario 2](/projects/safe-robot-arm/Figures/Scenario_2__Two_Obstacles__Elliptical_Path.gif)
- Two obstacles at different locations
- End-effector tracks an elliptical trajectory
- Maintains safety margins with slight tracking error near obstacles
- Quantitative Results:
  - Mean tracking error: 0.1760 m
  - Max tracking error: 0.6138 m
  - Min distance to obstacle: 0.0000 m
  - Number of safety margin violations: 0
- Tracking Error vs Time:
  ![Tracking Error Scenario 2](/projects/safe-robot-arm/Figures/tracking_error_scenario2.png)

**Scenario 3: Three Obstacles, Figure-Eight Path**
![Scenario 3](/projects/safe-robot-arm/Figures/Scenario_3__Three_Obstacles__Figure_8_Path.gif)
- Three obstacles in the workspace
- End-effector follows a figure-eight trajectory
- Successfully avoids all obstacles with increased tracking error near multiple obstacles
- Quantitative Results:
  - Mean tracking error: 0.1083 m
  - Max tracking error: 0.2365 m
  - Min distance to obstacle: 0.0000 m
  - Number of safety margin violations: 0
- Tracking Error vs Time:
  ![Tracking Error Scenario 3](/projects/safe-robot-arm/Figures/tracking_error_scenario3.png)

**Scenario 4: Dense Obstacles, Fast Path (Failure Case)**
![Scenario 4](/projects/safe-robot-arm/Figures/Scenario_4__Dense_Obstacles__Fast_Path.gif)
- Setup: Four obstacles, including one at the center ([0.0, 0.0]); the end-effector attempts to track a fast circular trajectory ($\omega = 1.2$).
- Main Cause of Failure:
  - **High Path Velocity ($\omega = 1.2$):** The desired trajectory changes rapidly. The CLF tries to aggressively drive the state toward this fast-changing target, but due to joint velocity limits, the arm cannot always keep up. When the end-effector falls behind, the CLF attempts to catch up, but the CBF (safety) constraint prevents it from taking a shortcut through the obstacle's safety margin. The only feasible solution is to "bounce back" or reverse, even if there is open space elsewhere.
  - **CBF Constraint as a Hard Wall:** The CBF acts as a strict safety barrier. Even when the obstacles are not tightly packed around the end-effector, the robot cannot "cut through" the safety margin to catch up with the fast-moving target. This results in the observed bounce-back or stalling effect.
  - **QP Solver Feasibility:** The clf_cbf_qp() function includes a relaxation variable (delta), but the cost on it is high (relax_penalty = 1e2). When constraints are too tight, the solver may choose suboptimal or zero control inputs ($u = [0, 0]$), or fall back to minimal motion to satisfy safety, which looks like bouncing or jittering in the animation.
  - **Check:** Printing prob.status or delta.value can help confirm when relaxation is being heavily used or when the QP is infeasible.
- **Observation:** The controller cannot track the entire path. The end-effector "bounces back" from safety margins and only covers a portion of the desired trajectory. Safety is always maintained, but tracking is sacrificed due to these physical and algorithmic limitations. Notably, the bounce-back is primarily due to high path velocity and velocity limits, not because the obstacles are tightly packed around the end-effector.
- **Insights:**
  - The controller is robust to moderate obstacle density and path complexity, maintaining safety and reasonable tracking.
  - In highly cluttered or high-speed scenarios, the controller prioritizes safety, resulting in incomplete or distorted path following and "bounce back" behavior at safety margins.
  - These tests highlight the trade-off between tracking performance and safety, and the importance of feasible trajectory planning in dense environments.
- Quantitative Results:
  - Mean tracking error: 0.6765 m
  - Max tracking error: 2.0384 m
  - Min distance to obstacle: 0.0000 m
  - Number of safety margin violations: 0
- Tracking Error vs Time:
  ![Tracking Error Scenario 4](/projects/safe-robot-arm/Figures/tracking_error_scenario4.png)

### 6.3 Discussion
- **Trade-offs**: Performance vs. safety
- **Limitations**: Current implementation constraints
- **Advantages**: Real-time capability, safety guarantees

## 7. Conclusion and Future Work
### 7.1 Key Contributions
- Implementation of CLF-CBF QP for 2-DOF robot
- Real-time safe control
- Experimental validation

### 7.2 Future Work
1. **Extensions**:
   - Dynamic obstacles
   - Multiple robots
   - Higher DOF systems

2. **Improvements**:
   - Adaptive gains
   - Learning-based parameter tuning
   - Hardware implementation

3. **Applications**:
   - Human-robot collaboration
   - Autonomous navigation
   - Medical robotics

## 8. References

[1] High-Order Control Barrier Functions, IEEE Transactions on Automatic Control, Vol. 67, No. 7, 2022

[2] Course Lecture Notes – ME548

[3] Python (NumPy, SciPy, cvxpy, Matplotlib)

[4] CVXPY & OSQP documentation

[5] OpenAI. (2024). ChatGPT (GPT-4)

## 9. Additional Figures
![Figure 1](/projects/safe-robot-arm/Figures/Figure_1.png)
![Figure 2](/projects/safe-robot-arm/Figures/Figure_2.png)
![Figure 3](/projects/safe-robot-arm/Figures/Figure_3.png)
![Figure 4](/projects/safe-robot-arm/Figures/Figure_4.png)

**Tracking Error vs Time Plots:**

- Scenario 1: Single Obstacle, Circular Path  
  ![Tracking Error Scenario 1](/projects/safe-robot-arm/Figures/scenario1.png)
- Scenario 2: Two Obstacles, Elliptical Path  
  ![Tracking Error Scenario 2](/projects/safe-robot-arm/Figures/tracking_error_scenario2.png)
- Scenario 3: Three Obstacles, Figure-Eight Path  
  ![Tracking Error Scenario 3](/projects/safe-robot-arm/Figures/tracking_error_scenario3.png)
- Scenario 4: Dense Obstacles, Fast Path  
  ![Tracking Error Scenario 4](/projects/safe-robot-arm/Figures/tracking_error_scenario4.png) 