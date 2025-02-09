import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helper';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constant';
import { fadeAnimation, headContentAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';


export const Customizes = () => {

  console.log('rd', EditorTabs);
  const snap = useSnapshot(state);
  return (
    <AnimatePresence >
      {!snap.intro &&
        <motion.div {...headContentAnimation}>
          <motion.div
            key='custom'
            className='absolute top-0 left-0 z-0'
            {...slideAnimation('left')}
          >

            <div className='flex items-center min-h-screen'>
              <div className=''>
                {EditorTabs.map((tab) => {
                  return (
                    <Tab
                      key={tab.name}
                      tab={tab}
                      handleClick={() => { }}
                    />
                  )
                })}
              </div>
            </div>
          </motion.div>
          <motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
            <CustomButton
              type={'filled'}
              title={'Go Back'}
              handleClick={() => state.intro = true}

            />

          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}
