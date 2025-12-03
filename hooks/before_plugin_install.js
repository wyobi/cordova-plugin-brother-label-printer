#!/usr/bin/env node

/**
 * Hook to clean up existing jniLibs before plugin install
 * This prevents "directory already exists" errors when re-adding platform
 */

var fs = require('fs');
var path = require('path');

module.exports = function(context) {
    // Only run for Android platform
    if (!context.opts.platforms || context.opts.platforms.indexOf('android') === -1) {
        return;
    }

    var androidDir = path.join(context.opts.projectRoot, 'platforms', 'android');
    var jniLibsDir = path.join(androidDir, 'app', 'src', 'main', 'jniLibs');

    if (fs.existsSync(jniLibsDir)) {
        console.log('Brother Printer Plugin: Cleaning up existing jniLibs directory...');
        
        var dirsToRemove = ['arm64-v8a', 'armeabi', 'armeabi-v7a', 'x86', 'x86_64'];
        
        dirsToRemove.forEach(function(dir) {
            var targetDir = path.join(jniLibsDir, dir);
            if (fs.existsSync(targetDir)) {
                try {
                    fs.rmSync(targetDir, { recursive: true, force: true });
                    console.log('Removed: ' + targetDir);
                } catch (err) {
                    console.warn('Could not remove ' + targetDir + ': ' + err.message);
                }
            }
        });
    }
};
