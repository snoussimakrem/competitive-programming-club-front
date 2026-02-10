import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/LoadingAnimation.css';

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 25;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setVisible(false);
      }, 500);
    }
  }, [progress]);

  if (!visible) return null;

  const codeSnippets = [
    'function solve() {',
    '  const dp = new Array(n+1).fill(0);',
    '  for(let i = 1; i <= n; i++) {',
    '    dp[i] = Math.max(dp[i-1], values[i]);',
    '  }',
    '  return dp[n];',
    '}',
    'class Solution {',
    '  public int[] twoSum(int[] nums, int target) {',
    '    Map<Integer, Integer> map = new HashMap<>();',
    '    for (int i = 0; i < nums.length; i++) {',
    '      int complement = target - nums[i];',
    '      if (map.containsKey(complement)) {',
    '        return new int[] { map.get(complement), i };',
    '      }',
    '      map.put(nums[i], i);',
    '    }',
    '    return new int[] {};',
    '  }',
    '}',
    '#include <bits/stdc++.h>',
    'using namespace std;',
    'int main() {',
    '  ios_base::sync_with_stdio(false);',
    '  cin.tie(NULL);',
    '  int t;',
    '  cin >> t;',
    '  while(t--) {',
    '    int n;',
    '    cin >> n;',
    '    cout << n * 2 << "\\n";',
    '  }',
    '  return 0;',
    '}'
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="loading-container"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loading-content">
          <div className="code-terminal">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="close"></span>
                <span className="minimize"></span>
                <span className="maximize"></span>
              </div>
              <div className="terminal-title">terminal — loading...</div>
            </div>
            <div className="terminal-body">
              {codeSnippets.slice(0, Math.floor(progress / 7)).map((line, index) => (
                <motion.div
                  key={index}
                  className="code-line"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="line-number">{index + 1}</span>
                  <span className="line-content">{line}</span>
                </motion.div>
              ))}
              <div className="cursor-blink">█</div>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-info">
              <motion.h2
                className="progress-title"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Initializing Competitive Programming Environment
              </motion.h2>
              
              <div className="progress-container">
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="progress-details">
                  <span className="progress-text">{Math.min(100, Math.round(progress))}%</span>
                  <span className="progress-status">
                    {progress < 25 && "Loading compiler..."}
                    {progress >= 25 && progress < 50 && "Preparing test cases..."}
                    {progress >= 50 && progress < 75 && "Setting up judge system..."}
                    {progress >= 75 && progress < 100 && "Finalizing resources..."}
                    {progress >= 100 && "Ready to code! 🚀"}
                  </span>
                </div>
              </div>

              <div className="loading-features">
                <motion.div 
                  className="feature"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <span className="feature-icon">✓</span>
                  <span>Algorithm Library</span>
                </motion.div>
                <motion.div 
                  className="feature"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <span className="feature-icon">✓</span>
                  <span>Problem Database</span>
                </motion.div>
                <motion.div 
                  className="feature"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <span className="feature-icon">✓</span>
                  <span>Community Platform</span>
                </motion.div>
              </div>
            </div>

            <motion.div 
              className="loading-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <p>Join thousands of developers mastering competitive programming</p>
              <small>Building the future of algorithmic problem solving since 2023</small>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingAnimation;